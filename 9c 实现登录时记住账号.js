/* 
    需求是，在用户打开登录页面时，如果用户输入信息正确并且勾选记住信息，那么下一次用户打开这个页面时，信息就会自动填写。

  
    
    使用字符串的replace()方式来替换html中相应位置的内容


    1、 使用cookie而不是session，前者可以在浏览器关闭之后依然保留用户信息
    2、账号密码同时正确且checkbox打钩的时候，才保留信息到cookie
    3、当勾选了复选框时，会随着form一起提交checkbox的name=value这个参数，用req.query接收它，然后用于判断
*/

const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const app = express();


app.use(cookieParser());
app.listen(4000, () => {
    console.log('server start at port 4000');
});


//设计路由

//显示用户登录界面
app.get('/', (req, res) => {
    // 获取c
    // let {usr,pwd,reg} = req.cookie;

    let uname = req.cookies.UNAME;
    let pwd = req.cookies.PWD;
    let content = fs.readFileSync(path.resolve(__dirname,'login.html')); // 读出buffer
    console.log(content);
    // let str = content.toString();
    // console.log(str)
    content = content.toString();
    content = content.replace('#USR#',uname);
    content = content.replace('#PWD#',pwd);
    content = content.replace('tag','checked');
    res.send(content);
     
    // res.sendFile(path.resolve(__dirname, 'login.html'));
});

    //处理用户登录
app.get('/login', (req, res) => {

    //接收get方式中的查询字符串格式发送的参数
    //接收用户输入的帐号及密码
    let { usr, pwd,reg } = req.query;
   
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
  let{UNAME} =  req.cookies;
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