var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    username: String,
    nick: String,
    password: String,
    password_tow: String,
    time: Date
});
var User = mongoose.model('User', schema);
exports.User = User;


var mongoose = require('mongoose')
var movies_schema = new mongoose.Schema({
    id: String,
    title: String,
    year: String,
    images: Object,
    directors: Object,
    rating: Object,
    genres: Array
});
var Movie = mongoose.model('Movie', movies_schema);
exports.Movie = Movie;

var mongoose = require('mongoose')
var comments_schema = new mongoose.Schema({
    title: String,
    content: String,
    username: String,
    mid: String,
    time: Date,
    mTitle: String,
    mv: Object
});
var Comment = mongoose.model("Comment", comments_schema);

exports.Comment = Comment;


var goods_schema = new mongoose.Schema({
    name: String,
    price:Number,
    discount: Number,
    img:String,
    type: Date,
    
});
var Good = mongoose.model("Good", comments_schema);

exports.Good = Good;

var cars_schema = new mongoose.Schema({
    username: String,
    goodId:String,
    count: Number,
    good:Object,
    
});
var Car = mongoose.model("Car", cars_schema);

exports.Car = Car;


var Kai_schema = new mongoose.Schema({
    username: String,
    goodId:String,
    count: Number,
    good:Object,
    
});
var Kai = mongoose.model("Kai", Kai_schema);

exports.Kai = Kai;