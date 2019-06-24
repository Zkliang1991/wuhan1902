
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

var { conn } = require("./utils/db")
var { setError, aesEncrypt, keys, aesDecrypt } = require("./utils")
var { Movie, Good, User, Cart, Product, Mycart, Location } = require("./utils/schema")
var { ObjectID } = require("mongodb")
var { waterfall } = require("async")
var session = require("express-session");

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// var{checkToken} = require("./utils/index");
// app.use(checkToken);

//post请求必须带的代码
app.use(express.json());   // req.body 获取 post  请求提交的 POSTData    $.post
app.use(express.urlencoded({ extended: false }));  //  form method="POST"  
//post请求必须带的代码

// 处理跨域方法   CORS 处理方式 
// app.all('*', function (req, res, next) {
//   // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By", ' 3.2.1');
//   next();
// });


//设置session中间件，必须要写
app.use(session({
  secret: "test",
  name: "appTest",
  cookie: { maxAge: 20 * 60 * 1000 },   // session 时长 
  resave: false,
  saveUninitialized: true
}));

function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  } else {
    nuxt.ready()
  }


  app.get("/api/index", (req, res) => {
    res.send("这是一个nuxt项目")
  })
  // app.get("/api/getGoods", (req, res) => {
  //   res.send("这是一个nuxt项目")
  // })
  // Give nuxt middleware to express


  //注册接口
  app.post("/api/register", (req, res) => {
    var body = req.body;
    console.log(body);
    var username = body.username;
    var password = body.password;

    var userinfo = { username: body.username, password: body.password };
    // console.log(query);

    conn((err, db) => {

      setError(err, res, db);

      User.findOne(userinfo, (err, result) => {

        setError(err, res, db);

        if (result) {
          res.json({
            msg: "用户名已存在",
            code: 200,
            type: 0,

          })
        } else {
          User.create(userinfo, (err, result) => {
            setError(err, res, db);
            res.json({
              msg: "注册成功",
              code: 200,
              type: 1,


            })
          })
        }
        // db.disconnect();

      })

    })

  })

  //登录接口
  app.post("/api/login", (req, res) => {
    var body = req.body;
    conn((err, db) => {

      setError(err, res, db);

      User.findOne(body, (err, result) => {

        setError(err, res, db);

        if (result) {

          var token = aesEncrypt(body.username, keys);
          console.log(token);
          req.session.token = token;
          console.log(req.session);
          res.json({
            msg: '登录成功',
            code: 200,
            type: 1,
            token

          })
        } else {
          res.json({
            msg: '登录失败,请重新登录',
            code: 200,
            type: 0
          })
        }
      })

    })
  })

  //获取所有商品数据的接口

  app.get("/api/getGoods", (req, res) => {

    conn((err, db) => {
      Product.find({}, {}).exec((err, result) => {

        setError(err, res, db);

        res.json({
          msg: '获取商品数据成功',
          code: 200,
          type: 0,
          result

        })

        console.log(result);

      })
    })

  })

  //获取商品详情数据接口
  app.get("/api/getGoodOne", (req, res) => {
    var goodId = req.query.goodid;
    // console.log(req.query);
    // console.log(goodId)
    conn((err, db) => {

      setError(err, res, db);

      Product.findOne({ id: goodId }, (err, result) => {
        setError(err, res, db);
        res.json({
          msg: "获取商品详情成功",
          code: 200,
          result
        })
        // db.disconnect();
      })

    })
  })

  //加入购物车接口
  app.post("/api/addtoCart", (req, res) => {

    var body = req.body
    // console.log(1,body);
    // res.json({
    //   msg: "加入 成功"
    // })
    var count = body.count * 1;

    var goodId = body.goodId;

    body.good = JSON.parse(body.good);
    // console.log(body.good);
    body.count = body.count * 1;
    // console.log(body.count);
    // console.log(req.headers);
    var token = req.session.token;
    // console.log(2, token);
    var username = aesDecrypt(token, keys);
    console.log(username);



    conn((err, db) => {
      setError(err, res, db);
      waterfall([
        (cb) => {
          Mycart.findOne({ username, goodId }, (err, result) => {
            cb(err, result);
          })
        },
        (args, cb) => {
          if (args) {
            // 修改数量
            Mycart.updateOne({
              username,
              goodId
            }, {
                $inc: {
                  count
                }
              }, (err, result) => {
                cb(err, { msg: "购物车数量累计添加成功", code: 200, result, type: 0 })
              })
          } else {
            // 直接插入 
            body.time = new Date();
            body.username = username;
            Mycart.create(body, (err, result) => {
              cb(err, { msg: "购物车新增数据成功", code: 200, result, type: 1 })
            })
          }
        }
      ], (err, result) => {
        setError(err, res, db);
        res.json(result);
        // db.disconnect();
      })
    })

  })


  //搜索接口
  app.get("/api/search", (req, res) => {

    var query = req.query;
    console.log(query);
    var limit = query.limit * 1 || 0;
    console.log(limit);
    var keyword = query.value;
    console.log(keyword);
    var obj = {};
    if (keyword) {
      obj = {
        $or: [{


          title: new RegExp(keyword)
        }, {
          // "type.text": new RegExp(keyword)
        }]
      }
    }

    conn((err, db) => {
      setError(err, res, db);
      Product.find(obj, {}).limit(limit).exec((err, result) => {
        setError(err, res, db);
        res.json({
          msg: "获取商品数据成功",
          code: 200,
          result
        })

        console.log(result);
        // db.disconnect();
      })
    })

  })

  //获取商品分类标签
  app.get("/api/getGoodTypes", (req, res) => {
    // var query = req.query;
    // var type = query.type;
    conn((err, db) => {
      setError(err, res, db);
      Product.distinct("type", (err, result) => {
        setError(err, res, db);
        res.json({
          msg: "获取商品分类数据成功",
          code: 200,
          result
        })
        db.disconnect();
      })
    })
    // res.json({
    //   msg: "6656",
    //   code: 200
    // })

    // console.log(666);
  })

  //获取购物车内的商品数据接口

  app.get("/api/carts", (req, res) => {

    var query = req.query;
    console.log(query);

    //取前端的token,必须配请求头,必须通过req.headers.token,才能取到前端的token数据
    var username = aesDecrypt(req.headers.token, keys);

    console.log(username);

    conn((err, db) => {

      setError(err, res, db);

      Mycart.find({ username: username }, (err, result) => {
        setError(err, res, db);
        res.json({
          msg: "获取购物车数据成功",
          code: 200,
          result
        })
        // db.disconnect();
      })

    })
  })

  //更新购物车数据接口
  app.get("/api/order", (req, res) => {
    var query = req.query;
    console.log(query)

    var username = aesDecrypt(req.headers.token, keys);

    var count = query.count;
    // console.log(good);
    console.log(count);

    conn((err, db) => {

      setError(err, res, db);

      Mycart.update({ username: username }, {

        $set: {
          count: count

        }

      }, (err, result) => {
        setError(err, res, db);
        res.json({
          msg: "购物车数据更新成功",
          code: 200,
          result
        })
      })



    })

  })

  app.post("/api/address", (req, res) => {

    var body = req.body;

    var content = body.data;

    console.log(content);


    conn((err, db) => {

      setError(err, res, db);

      Location.create(content, (err, result) => {

        setError(err, res, db);
        res.json({
          msg: "地址新增成功",
          code: 200,
          result


        })

      })

    })
  })








  // app.post("vue/uploadAvatar",(req,res)=>{

  // })

  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
