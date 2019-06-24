const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const {waterfall}=require('async')
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')


app.use(express.json());   // req.body 获取 post  请求提交的 POSTData    $.post
app.use(express.urlencoded({ extended: false }));  //  form method="POST"  





async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}







var {conn} =require("../utils/db");
var {setError} = require("../utils")
var {Good,User,Lol,Car} =require("../utils/schema")

app.post('/login',(req,res)=>{
  var body=req.body;
  console.log(body)
  var username = req.body.username
  conn((err,db)=>{
    setError(err,res,db);
    User.findOne(body,(err,result)=>{
      setError(err,res,db);
      if(result){
        res.json({
          msg:'登陆成功',
          username,
          code:200,
          type:1
        })
        console.log('登录成功');
      }else{
        res.json({
          msg:'登录失败',
          code:400,
          type:0
        })
      }
      db.disconnect();
    })
  })
})


app.post('/zuche',(req,res)=>{
  var body = req.body
  //console.log(body);
  conn((err,db)=>{
      setError(err,res,db);
      waterfall([
          (callback)=>{
              User.findOne({username:body.username},(err,result)=>{
                  callback(err,result)
              })
          },
          (args,callback)=>{
              if(args){
                  callback(null,{type:0,msg:"用户名已经存在,请重新注册",code:200})
              }else{
                  body.time = new Date();
                  var user = new User(body);
                  user.save((err,result)=>{
                      callback(err,{type:1,msg:"注册成功!",code:200})
                  })
              }
          }
      ],(err,result)=>{
          if(err) throw err;
          res.json({
              result,
          })
          db.disconnect();
      })
  })
})

app.get('/getGoods',(req,res)=>{
  conn((err,db)=>{
    setError(err,res,db);
    Lol.find({},{}).exec((err,result)=>{
      setError(err,res,db);
      res.json({
        msg:"获取成功",
        code:200,
        result
      })
      //console.log(result);
    })
  })
})
app.get('/getGoodss',(req,res)=>{
 // console.log(req.query);
  var ta=req.query.ta
  conn((err,db)=>{
    setError(err,res,db);
    
    Lol.find({dataTags:{$in:ta}}).exec((err,result)=>{
      setError(err,res,db);
      res.json({
        msg:"获取成功",
        code:200,
        result
      })
      //console.log(result);
    })
  })
})

app.get('/getGoodsss',(req,res)=>{
  //console.log(req.query);
   var key=req.query.keyword
   conn((err,db)=>{
     setError(err,res,db);
   Lol.find({title:{$regex:key}}).exec((err,result)=>{
      setError(err,res,db);
      res.json({
        msg:"获取成功",
        code:200,
        result
      })
      //console.log(result);
    })
  })
})

app.get('/getGoodssss',(req,res)=>{
  var username=req.query.username
  console.log(req.query);

  conn((err,db)=>{
    setError(err,res,db);
    Car.find({username},{}).exec((err,result)=>{
      setError(err,res,db);
      res.json({
        msg:"获取成功",
        code:200,
        result
      })
      console.log(result);
    })
  })
})

app.get('/shan',(req,res)=>{
  var username=req.query.username;
  var title=req.query.title;
  console.log(req.query);

  conn((err,db)=>{
    setError(err,res,db);
    Car.deleteOne({username,title},{}).exec((err,result)=>{
      setError(err,res,db);
      res.json({
        msg:"获取成功",
        code:200,
        result
      })
      console.log(result);
    })
  })
})



app.post("/addCar",(req,res)=>{
  var body = req.body;
  console.log(body,body.data.num);
  var num = body.data.num*1;
  console.log(typeof num,num);
  var username = body.data.username;
  // var dataTags = body.dataTags;
  // var src = body.src;
  var title = body.data.title;
  body.data.num=body.data.num*1;
  console.log(typeof body.data.num,body.data.num);
  conn((err,db)=>{
       setError(err,res,db);
       waterfall([
           (cb)=>{
               Car.findOne({username,title},(err,result)=>{
                   cb(err,result)
               })
           },
           (args,cb)=>{
               if(args){
                   Car.updateOne({
                       username,
                       title
                   },{
                       $inc:{
                           num
                       }
                   },(err,result)=>{
                       cb(err,{msg:"商品添加成功",
                               code:200,
                               result,
                               type:0
                       })
                   }
                   )
               }else{
                   body.time = new Date();
                   body.username = username;
                   Car.create(body.data,(err,result)=>{
                       cb(err,{
                           msg:"新增用户商品数据成功",
                           code:200,
                         result,
                         type:1,
                       })
                   })
               }
           }
       ],(err,result)=>{
           setError(err,res,db);
           res.json(result);
           db.disconnect();
       })
   })
})





start()



