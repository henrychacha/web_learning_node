const path = require('path');
const express = require('express');
const cookieSession = require('cookie-session');
const app = express();
app.listen(4000, () => {
    console.log('server port 4000');
});

//session特点：  
// 1、session存放在服务端，相对安全 
// 2、session不能设置有效时间，默认有效时间是在整个有效会话期间  
//


//使用中间件cookie-session操作session:  
app.use(cookieSession({
    name: 'cursession', //cookie名称 
    keys: ['123^%$abd', '*(&^%#876'] //密钥

    // Cookie Options
    //maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));


//设计路由

//设置session  :req.session.session名称 = 值 
app.get('/setsession', (req, res) => {

    req.session.UID = 21;
    req.session.FENSHU = [89, 90];

    res.send("<script>alert('session设置成功');location.href='/getsession';</script>");
});


//获取session  
app.get('/getsession', (req, res) => {
    console.log(req.session);
    let { UID, FENSHU } = req.session;
    res.send(req.session);
});