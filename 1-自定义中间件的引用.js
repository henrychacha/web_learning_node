
/* 
    使用自定义中间件
    需求 在没有登录的情况下，不能访问/welcome端口
*/
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const cookieSession = require('cookie-session');

app.listen(4000, () => {
    console.log('server start at port 4000');
});
app.use(cookieSession({
    name:'coksession',
    keys:['234nss&&','lsdf123a32r*']
}))


//设计路由

//显示用户登录界面
app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'login.html'));
});




//处理用户登录
app.get('/login', (req, res) => {

    //接收get方式中的查询字符串格式发送的参数
    //接收用户输入的帐号及密码
    let { usr, pwd } = req.query;


    //先判断帐号是否正确
    if (usr == 'lisi') { //帐号正确

        //再判断密码是否正确 
        if (pwd == 1234) { //密码正确 
    
             //设置session
            req.session.USR = usr;
            req.session.PWD = pwd;

            res.send(`<script>alert('你登录成功了');location.href='/welcome';</script>`)

        } else { //密码错误 
            res.send("<script>alert('密码错误');location.href='/';</script>");
        }


    } else { //帐号错误
        res.send("<script>alert('帐号错误');location.href='/';</script>");
    }


});


function checklogin(req,res,next){

    //从session获取当前已登录的账号
    let cur = req.session.USR ? req.session.USR : '';
    /* 
        三目运算符: 三元, 判断的条件 ? 条件成立时, 执行的代码 : 条件不成立时, 执行的代码

        当session中有值，也就是登录成功时，cur获得这个值，而session中没有值的时候，就让cur为空
    */

    if( cur == ''){ // 未登录
        res.send("<script>alert('请先登录');location.href = '/';</script>")}{

    }
    /* 
        如果用于已经登陆了，则查找并执行后面的路由
    
    */
    next();
};


/* 
    因为只有欢迎界面需要校验是否已经登录，所以这个自定义中间件只需要放在欢迎界面的路由前面，而不是放在所有路由的前面
*/

// app.use(checklogin()); ！！不需要写括号 
app.use(checklogin); 


// 欢迎界面
app.get('/welcome', (req, res) => {
  let{USR,NAME} =  req.session;
     res.send(`欢迎您${USR}回来`);
})
/* 
    设置了session以后，在页面的任何一个路由都可以使用
*/
/*
        // 原来的代码
        app.get('/welcome', (req, res) => {

        res.send(`欢迎您回来`);
        })



*/