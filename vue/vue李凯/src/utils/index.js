

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

exports.aesEncrypt = aesEncrypt;   // 加密
exports.aesDecrypt = aesDecrypt;   // 解密
exports.keys = keys;        // 密钥 



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

// req.headers.token 把 token 传递 过来
// 后端需要处理的逻辑  
// 1. 如果 req.headers 没有token 直接判断 token不存在,请马上登录
// 2. 前端 req.headers 有 token ,但是 后端 的 session 没有存储token token过期或者失效
// 3. 前端 req.headers 有 token, 后端 session 也有 token  但是不匹配  token不匹配
exports.checkToken = function (req, res, next) {
    console.log(req.url);
    if (req.url !== '/lol/login') {
        console.log(req.headers);
        var client_token = req.headers.token;
        var server_token = req.session.token;
        console.log("server_token==>" + server_token);
        if (client_token) {
            if (server_token) {
                if(client_token===server_token){
                    next();
                }else{
                    res.json({
                        msg: "token匹配，请重新登录",
                        code: 401
                    })
                }
            } else {
                res.json({
                    msg: "token过期或失效，请重新登录",
                    code: 401
                })
            }
        } else {
            res.json({
                msg: "token不存在，请马上登录",
                code: 401
            })
        }
    } else { // 登录页不用检测token
        next();
    }
}


exports.checkIsLogin = function (req, res, callback) {
    if (req.session.token) {
        callback()
    } else {
        res.send(`<script>alert('你已经登录过期或者失效,亲重新登录');location.href='/login'</script>`)
    }
}



exports.dateFormat = function (date) {

    var time = new Date(date);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();

    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}  