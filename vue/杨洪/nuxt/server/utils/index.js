// 中间件 
exports.checkSome = function (req, res, next) {
    console.log("这是一个中间件  ");
    next();
}


var crypto = require("crypto"); // node 模块 

// 加密函数
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

// 解密 
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
const keys = "wuhan1902daydayup";

exports.aesEncrypt = aesEncrypt; // 加密
exports.aesDecrypt = aesDecrypt; // 解密
exports.keys = keys; // 密钥 



/**
 *   setError  数据库错误
 *   res
 *   err 
 *   db
 * */

exports.setError = function (err, res, db) {
    if (err) {
        res.json({
            msg: "数据库或者服务器错误",
            code: 500,
            type: 10010
        });
        db.disconnect();
        throw err;
    }
}

// 检测 后端session   token 是否存在 是否登录 
exports.checkIsLogin = function (req, res, callback) {
    if (req.session.token) {
        callback()
    } else {
        res.send(`<script>alert('你已经登录过期或者失效,亲重新登录');location.href='/denglu'</script>`)
    }
}