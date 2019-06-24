
var mongoose = require("mongoose");
var users_schema = new mongoose.Schema({username:String,nickname:String,password:String,dbpwd:String,time:Date});
var User = mongoose.model("User",users_schema);

exports.User = User;

var movies_schema = new mongoose.Schema({id:String,title:String,year:String,images:Object,directors:Object,rating:Object,genres:Array});
var Movie = mongoose.model("Movie",movies_schema);

exports.Movie = Movie;


var comments_schema = new mongoose.Schema({title:String,content:String,username:String,mid:String,time:Date,mTitle:String,mv:Object});
var Comment = mongoose.model("Comment",comments_schema);

exports.Comment = Comment;


var goods_schema = new mongoose.Schema({name:String,price:Number,discount:Number,img:String,type:Object});
var Good = mongoose.model("Good",goods_schema);

exports.Good = Good;

var lols_schema = new mongoose.Schema({title:String,dataTags:String,src:String});
var Lol = mongoose.model("Lol",lols_schema);

exports.Lol = Lol;

var cars_schema = new mongoose.Schema({title:String,dataTags:String,src:String,username:String,num:Number});
var Car = mongoose.model("Car",cars_schema);

exports.Car = Car;