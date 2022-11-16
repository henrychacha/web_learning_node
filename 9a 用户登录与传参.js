/* 
    在不适用cookie和session时，如何用已有的知识把用户输入的信息用到另一个路由。/welcome“欢迎您回来”
*/

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.listen(4000, () => {
    console.log('server start at port 4000');
});

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

    // if(usr == 'lisi' && pwd == 1234){

    // }else{

    // }

    //先判断帐号是否正确
    if (usr == 'lisi') { //帐号正确

        //再判断密码是否正确 
        if (pwd == 1234) { //密码正确 
            // res.send('登录成功');
            // res.send(`<script>alert('登录成功');location.href='/welcome';</script>`)

            /* 
                为了实现把本路由输入的名字lisi，带入到新的欢迎界面中去，在不适用cookie，session的方法下，可以通过返回的地址栏来用get的方式传参数
            */
            res.send(`<script>alert('登录成功');location.href='/welcome?uname=${usr}';</script>`)
            /* 
                登录成功后跳转首页，location变为新的路由/welcome,需要开辟新的路由 ，而且这是一种get发送请求的方式
            */
        } else { //密码错误 
            res.send("<script>alert('密码错误');location.href='/';</script>");
        }


    } else { //帐号错误
        res.send("<script>alert('帐号错误');location.href='/';</script>");
    }


});

// 欢迎界面


app.get('/welcome', (req, res) => {
    let { uname } = req.query; //接受get方式请求中的参数
    res.send(`欢迎您${uname}回来`);
})

/*
        // 原来的代码
        app.get('/welcome', (req, res) => {

        res.send(`欢迎您回来`);
        })



*/