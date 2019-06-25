


var express = require('express');

var router = express.Router();
var {ObjectID}=require("mongodb")
var {conn}=require('./utils/db');
var {setError}=require('./utils/index')
var {Movie,Good,Car}=require('./utils/schema')
var {waterfall}=require("async")
router.get('/index',(req,res)=>{
    res.json({
        msg:'这是vue 项目',
        code:200
    })
})

router.get('/movie',(req,res)=>{
    var limit=req.query.limit*1||0
    conn((err,db)=>{
        setError(err,res,db);
        Movie.find({},{}).limit(limit).exec((err,result)=>{
            // console.log(result)
            setError(err,res,db);
            res.json({
                msg:'获取电影',
                code:200,
                result
            })
        })
    })
})
router.post('/login',(req,res)=>{
    var body=req.body
  console.log(body);
  res.json({
    msg:'登陆',
    code:200,
   type:1
  })
})
//获取商品
router.get("/getgoods",(req,res)=>{
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

//根据id获取商品详情
router.get("/getgoodl",(req,res)=>{
    var goodId=req.query.goodId
    console.log('获取ID')
    console.log(req.query.goodId)
    conn((err,db)=>{
        setError(err,res,db);
        Good.findOne({id:goodId},(err,result)=>{
            console.log(result)
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

//商品分类
router.get("/getgoodfen",(req,res)=>{
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

//购物车逻辑
  router.post("/cary",(req,res)=>{
        var body=req.body
       var count=body.count*1
       body.count=body.count*1
       var goodId=body.goodId;
       body.good=JSON.parse(body.good)
    //    var username=aesDecrypt(req.headers.token)
       //判断购物车

       conn((err,db)=>{
            setError(err,res,db);
            waterfall(
                [
                    (cb)=>{
                        Car.findOne({username,goodId},(err,result)=>{
                            cb(err,result)
                        })
                    },
                    (arr,cb)=>{
                        if(arr){
                            Car.updateOne({
                                username,
                                goodId
                            },{
                                $inc:{
                                    count
                                }
                            },(err,result)=>{
                                cb(err,{mag:'购物车数量累计添加成功',code:200,result})
                            })
                        }else{
                            body.time=new Date()
                            Car.insert(body,(err,result)=>{
                                cb(err,{mag:'购物车新增成功',code:200,result})
                            })
                        }
                    }
                ]
            ),((err,result)=>{
                setError(err,res,db);
                res.json(result)
                db.disconnect()
            })
       })
        
  })
module.exports = router;