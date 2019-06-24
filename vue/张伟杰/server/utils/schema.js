
var mongoose = require("mongoose");
var users_schema = new mongoose.Schema({ username: String, nickname: String, password: String, dbpwd: String, time: Date });
var User = mongoose.model("User", users_schema);

exports.User = User;

var mongoose = require("mongoose");
var movies_schema = new mongoose.Schema({ id: String, title: String, year: String, images: Object, directors: Object, rating: Object, genres: Array });
var Movie = mongoose.model("Movie", movies_schema);

exports.Movie = Movie;


var mongoose = require("mongoose");
var comments_schema = new mongoose.Schema({ title: String, content: String, username: String, mid: String, time: Date, mTitle: String, mv: Object });
var Comment = mongoose.model("Comment", comments_schema);

exports.Comment = Comment;


var mongoose = require("mongoose");
var goods_schema = new mongoose.Schema({ name: String, price: Number, discount: Number, img: String, type: Object, _id: String });
var Good = mongoose.model("Good", goods_schema);

exports.Good = Good;

var mongoose = require("mongoose");
var carts_schema = new mongoose.Schema({ username: String, count: Number, goodId: String, good: Object, time: Date });
var Cart = mongoose.model("Cart", carts_schema);

exports.Cart = Cart;

var mongoose = require("mongoose");
var products_schema = new mongoose.Schema({ title: String, price: Number, img: String, type: Object, _id: String, time: Date });
var Product = mongoose.model("Product", products_schema);

exports.Product = Product;


var mongoose = require("mongoose");
var mycarts_schema = new mongoose.Schema({ username: String, count: Number, goodId: String, good: Object, time: Date });
var myCart = mongoose.model("Mycart", mycarts_schema);

exports.Mycart = myCart;


var mongoose = require("mongoose");
var locations_schema = new mongoose.Schema({ content: Object });
var Location = mongoose.model("Location", locations_schema);

exports.Location = Location;

// count: this.number,
//                     goodId: this.$route.params.goodId,
//                     // good: JSON.stringify(this.good)