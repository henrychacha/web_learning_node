/* 
  需求，在用户打开登录页面时，如果用户输入信息正确并且勾选记住信息，那么下一次用户打开这个页面时，信息就会自动填写。

  使用ejs模板引擎来实现，渲染html中特定位置的内容

  需要联系的文件 login.html
*/

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const fs = require('fs');

app.use(cookieParser());
app.listen(4000, () => {
    console.log('server start at port 4000');
});

/* 
    设置ejs模板引擎
*/
app.set('view engine','ejs');
app.set('views',[path.resolve(__dirname)]);
app.engine('html',require('ejs').__express);

//设计路由

//显示用户登录界面
app.get('/', (req, res) => {
    // 获取cookie
    // let {UNAME,PWD,REG} = req.cookies;

    let cur = req.cookies.UNAME ? req.cookies.UNAME : '';
    let PWD = req.cookies.PWD ? req.cookies.PWD :  '';
    console.log(cur,PWD);
    res.render('login.html',{cur,PWD});
});

//处理用户登录
app.get('/login', (req, res) => {

    //接收get方式中的查询字符串格式发送的参数
    //接收用户输入的帐号及密码
    let { usr, pwd,reg } = req.query;
    console.log(req.query);
    // return
    /* 
        使用return强制阻断，方便观察上面的代码而不被下面代码的结果干扰
    */


    //先判断帐号是否正确
    if (usr == 'lisi') { //帐号正确

        //再判断密码是否正确 
        if (pwd == 1234) { //密码正确 
    

            // 如如果用户勾选了记住账号
            if(reg == 1){
            // 将登陆成功的用户保存到cookie
                res.cookie('UNAME',usr,{maxAge:60*60*1000*24*7});// 保存一周
                res.cookie('PWD',pwd,{maxAge:60*60*1000*24*7});// 保存一周
                res.cookie('REG',reg,{maxAge:60*60*1000*24*7});// 保存一周
                console.log('hello...');
                /* 
                    这样，在客户端浏览器中就保留了cookie内容。只有打开任意页面都可以在控制台找到cookie


                */
             

            }

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
  let{UNAME,PWD} =  req.cookies;
     res.send(`欢迎您${UNAME}回来`);
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