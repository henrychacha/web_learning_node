
/* 
    使用session来实现将用户登录的信息保存下来用在新的路由中。


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

            res.send(`<script>alert('登录成功');location.href='/welcome';</script>`)

        } else { //密码错误 
            res.send("<script>alert('密码错误');location.href='/';</script>");
        }


    } else { //帐号错误
        res.send("<script>alert('帐号错误');location.href='/';</script>");
    }


});

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