const path = require('path');
const express = require('express');
var cookieParser = require('cookie-parser');
const app = express();
app.listen(4000, () => {
    console.log('server port 4000');
});

//使用中间件cookie-parser获取cookie:
app.use(cookieParser());


//设置cookie :
//res.cookie('cookie名称','cookie的值'[,选项]);
//选项：
// httpOnly:为true则只能服务器访问cookie、客户端不能访问
// maxAge:设置cookie有效时间，单位为毫秒
// path:设置cookie只能在某个路径中使用
// domain:设置cookie只能在某个域名中使用

//cookie的特点：
//1)cookie默认有效时间为整个有效会话期间，cookie理论上可以永久有效
//2)cookie是存放在客户端，cookie不安全、cookie可以禁用、cookie大小及个数是有限制的 

app.get('/setcookie', (req, res) => {
    res.cookie('TST', 666, { httpOnly: true });
    //maxAge:设置cookie的有效时间，时间单位毫秒
    res.cookie('USR', 'Tom', { maxAge: 60 * 1000, });
    res.cookie('AGE', 22, { httponly: true, path: "/cookies" });
    res.cookie('UID', 123, { domain: 'www.qq.com' });
    res.send("<script>alert('cookie设置成功');location.href='/getcookie';</script>");
});


//获取cookie:要使用第三方的中间件cookie-parser
app.get('/getcookie', (req, res) => {

    console.log(req.cookies);

    res.send(req.cookies);
});

app.get('/cookies', (req, res) => {
    console.log(req.cookies);
    res.send(`获取cookie:`);
});