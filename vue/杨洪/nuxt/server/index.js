const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

var session=require("express-session")




var router = express.Router();
// var {ObjectID}=require("mongodb")
var {conn}=require('./utils/db');
var {aesEncrypt,keys,setError}=require('./utils/index')
var {Good,Car,User,Movie,Kai}=require('./utils/schema')

var {waterfall}=require("async")


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')


 function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server


    // 设置 session 中间件  在路由中间件之前 
  app.use(session({
    secret:"test",
    name:"appTest",
    cookie:{maxAge:20*60*1000},   // session 时长 
    resave:false,
    saveUninitialized:true
  }));

  app.use(express.json());   // req.body 获取 post  请求提交的 POSTData    $.post
  app.use(express.urlencoded({ extended: false }));  //  form method="POST"  
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
     builder.build()
  } else {
     nuxt.ready()
  }

  


    app.post("/zhuce",(req,res)=>{      //注册逻辑
          var body=req.body
          console.log(body,123)
          conn((err,mongoose)=>{
            if(err)throw err

              waterfall([
                  (cellback)=>{
                      User.findOne({username:body.username},(err,result)=>{
                        console.log(result)
                        cellback(err,result)
                      })
                  },
                  (args,cellback)=>{
                      if(args){
                          
                        cellback(null,{type:0,msg:"用户名已存在，请重新注册",code:200})
                      }else{
                        console.log(56789)
                          var user=new User(body);
                          user.save( (err,result)=>{ 
                            
                            cellback(err,{type:1,msg:"注册成功",code:200})
                          } )
                      }
                  }
              ],(err,result)=>{
                if(err)throw err
                console.log(result)
                if(!!result.type){
                  res.json({
                    result
                  })
                  // res.send(`<script>alert('${result.msg}');location.href='/login?username=${aesEncrypt(body.username,keys)}'</script>`)
                }else{
                  res.json({
                    result
                  })
                  // res.send(`<script>alert('${result.msg}');location.href='/resiter'</script>`)
                }
                mongoose.disconnect();
              })
             
          })
    })               

  app.post("/login",(req,res)=>{
    var body=req.body;

    console.log(body,1123)
    conn((err,db)=>{
      setError(err,res,db);
      User.findOne(body,(err,result)=>{
        setError(err,res,db);
            if(result){
              var token=aesEncrypt(body.username,keys)
               req.session.token=token
              res.json({
                msg:"登陆成功",
                code:200,
                type:1,
                token
              })
            }else{
              res.json({
                msg:"登陆失败，请重新登陆",
                code:200,
                type:0
              })
            } 
      })
    })
  
  })


  app.get("/getgoods",(req,res)=>{
    
    var query=req.query;
  
    var limit=query.limit*1 || 0;
    var keyword=query.keyword;
    var obj={};
    if(keyword){
        obj={
            $or:[
                {
                    name:new RegExp(keyword)
                },
                {
                    "type.text":new RegExp(keyword)
                }
            ]
        }
    }
    conn((err,db)=>{
        setError(err,res,db);
        Good.find(obj,{}).exec((err,result)=>{
            setError(err,res,db);
            res.json({
                msg:"获取商品数据成功",
                code:200,
                result
            })
            db.disconnect()
        })
    })
  })



  app.get("/allcar",(req,res)=>{                          //商品分类
          conn((err,db)=>{
            setError(err,res,db);
            Good.distinct("type",(err,result)=>{
              setError(err,res,db);
                  res.json({
                    msg:"获取商品分类成功",
                    code:200,
                    result
                })
                db.disconnect()
            })
          })
  })
  app.get("/xiang",(req,res)=>{
      var goodId=req.query.goodId
     
      
      conn((err,db)=>{
        setError(err,res,db);
        Good.findOne({id:goodId},(err,result)=>{
          setError(err,res,db);
          res.json({
            msg:"获取商品详情成功",
            code:200,
            result
          })
           db.disconnect()
        })

      })
  })

  app.get("/wk",(req,res)=>{
      conn((err,db)=>{
        if(err) throw err
        Movie.find({},{},(err,result)=>{
          if(err) throw err
          res.json({
            msg:"全部商品",
            code:200,
            result
          })
          db.disconnect()
        })
      })
  })

  
    // 添加购物车

    app.post('/setCart',(req,res)=>{
      var body=req.body
      console.log(body)
      var goodId=body.goodId
      body.good=JSON.parse(body.good)
     
      var count=body.count*1
      body.count=body.count*1
      // var username=aesEncrypt(req.headers.token,keys)
      
      
        conn((err,db)=>{
          setError(err,res,db);
          waterfall([
              (cb)=>{
                Car.findOne({goodId},(err,result)=>{
                  cb(err,result)
                  
                  
                 
                })
              },
              (args,cb)=>{
                 if(args){
                    Car.updateOne({
                      // username,
                      goodId
                    },{
                      $inc:{
                        count
                      }
                    },(err,result)=>{
                        cb(err,{msg:"购物车数量添加成功",code:200,result,type:0})
                    })
                 }else{
                    // body.time=new Date()
                    // body.username=username
                     Car.create(body,(err,result)=>{
                       cb(err,{msg:"购物车数量插入成功",code:200,result,type:1})
                     })
                 }
              }
          ],(err,result)=>{
            setError(err,res,db);
            res.json(result),
            db.disconnect()
          })


        })
              
     
    })

    app.post("/mki",(req,res)=>{
      console.log(123)
      conn((err,db)=>{
        if(err) throw err;
        Car.find({},{},(err,result)=>{
          if(err) throw err;
          res.json({
            msg:"商品传输成功",
            code:200,
            result
          })

        })
      })
      
    })

    app.get("/shanchu",(req,res)=>{
          var query=req.query
          var goodId=query.goodId
          // query.goods=JSON.parse(query.goods)
          console.log(query)
          console.log(goodId)
          conn((err,db)=>{
              if (err) throw err
              Car.deleteOne({goodId},{},(err,result)=>{
                if (err) throw err

                res.json({
                  msg:"删除成功",
                  code:200,
                  result
                })
              })
          })
    })

    app.get("/buy",(req,res)=>{
      
       conn((err,db)=>{
          if (err) throw err
           Car.deleteMany({},{},(err,result)=>{
                if (err) throw err
                res.json({
                  msg:"删除所有商品",
                  code:200,
                  result
        
                })
           })
       })
       
    }),
    app.get("/go",(req,res)=>{
        
      conn((err,db)=>{
        if (err) throw err
          Movie.find({},{},(err,result)=>{
              if (err) throw err
              res.json({
                msg:"智取威虎山",
                code:200,
                result
      
              })
          })
      })
       
    }),
    app.get("/ni",(req,res)=>{
         res.json({
           msg:"新增数据成功",
           code:200
         })
    })
         
  
  app.use(nuxt.render)       

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()


