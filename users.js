var express = require('express');
//第三方包：uuid随机产生唯一字符串
const uuidv4 = require('uuid')['v4'];
//第三方包：生成验证码
const svgCaptcha = require('svg-captcha');
const { Msg } = require('../utils/message.js');
const Auth = require('../utils/auth.js');

const mysqlObj = require('../models/dbMysql.js');
var router = express.Router();


// console.log(mysqlObj);

// return;

//处理用户登录：  
router.post('/loginact', async(req, res) => {
    //接参(用户输入的帐号、密码、验证码)  
    let { uname = '', upwd = '' } = req.body;

    if (uname == '' || upwd == '') {
        res.send(Msg(500, '帐号、密码不能为空!'));
        return;
    }

    let sql = `select uid from member where username='${uname}' and password='${upwd}'`;
    let [err, data] = await mysqlObj.querys(sql);
    if (data[0]['uid'] != '') { //登录成功
        //生成Token  
        let tokens = Auth.getToken(data[0]['uid']);

        res.send(Msg(200, '登录成功', { tokens, uname }));
    } else { //帐号或密码错误
        res.send(Msg(500, '帐号或密码错误'));
    }


});

//用户注册：   
router.get('/register', async(req, res) => {

    //接参(用户提交过来帐号、密码)
    let { uname = '', upwd = '', ucode = '', curcode = '' } = req.body;

    if (uname == '' || upwd == '') {
        // res.send({ "code": "500", "msg": "帐号、密码不能为空" });
        res.send(Msg(500, "帐号、密码不能为空"));
        return;
    }

    if (ucode == '') { //用户未输入验证码
        res.send(Msg(500, "请输入验证码"));
        return;
    } else if (ucode.toUpperCase() != curcode.toUpperCase()) { //用户输入的验证码不正确 
        res.send({ "code": "500", "msg": "验证码不正确" });
        return;
    }


    //执行sql语句：
    let sql = `select count(*) as n from member where username='${uname}'`;
    let [err, data] = await mysqlObj.querys(sql);
    //判断帐号是否注册过
    if (data[0].n !== 0) { //帐号存在
        res.send({ "code": "500", "msg": "帐号已注册过" });
        return;
    }


    //将新注册的用户写放数据库 
    sql = `insert into member(username,password,uid,createdate)values('${uname}','${upwd}','${uuidv4()}','${new Date().getTime()}')`;
    // console.log(sql);
    // return;
    [err, data] = await mysqlObj.querys(sql);

    if (err == '') { //添加成功
        res.send({ "code": "200", "msg": "添加成功" });
    } else { //添加失败
        res.send({ "code": "500", "msg": "添加失败" });
    }

});

//创建验证码：  
router.get('/createcode', (req, res) => {

    let capt = svgCaptcha.create();
    console.log(capt.text);
    res.send({ 'code': '200', 'msg': '验证码创建成功', 'data': { 'txt': capt.text, 'img': capt.data } });
});

module.exports = router;