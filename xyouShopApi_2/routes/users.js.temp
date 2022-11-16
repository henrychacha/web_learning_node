var express = require('express');
const mysqlObj = require('../models/dbMysql.js');
var router = express.Router();

// console.log(mysqlObj);

// return;

//用户注册：   
router.post('/register', async(req, res) => {

    //接参(用户提交过来帐号、密码)
    let { uname = '', upwd = '' } = req.body;

    if (uname == '' || upwd == '') {
        res.send({ "code": "500", "msg": "帐号、密码不能为空" });
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
    sql = `insert into member(username,password,uid,createdate)values('${uname}','${upwd}','7788','1587027991200')`;
    [err, data] = await mysqlObj.querys(sql);

    if (err == '') { //添加成功
        res.send({ "code": "200", "msg": "添加成功" });
    } else { //添加失败
        res.send({ "code": "500", "msg": "添加失败" });
    }

});

module.exports = router;