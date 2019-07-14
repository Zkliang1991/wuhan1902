const mongoose = require("mongoose");

var config = {
    hostname: "0.0.0.0",
    port: 27017,
    dbName: 'wh1902'
}

var CONN = `mongodb://${config.hostname}:${config.port}/${config.dbName}`;

exports.conn = function (callback) {
    mongoose.connect(CONN, {
        useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.log('数据库连接失败')
            callback(err, null)
        } else {
            console.log('数据库连接成功')
            callback(null, mongoose)


        }
    })
}