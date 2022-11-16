const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

let uArr = require('../data/users.json');

//设置路由

//用户列表
router.get('/ulist', (req, res) => {

    // res.sendFile();
    res.render('ulist.html', { uArr });
});

//注册用户
router.get('/reg', (req, res) => {

    //res.end();
    //res.write();
    //res.send();
    //res.sendFile()

    res.render('reg.html');
});

//处理注册 
router.post('/regact', (req, res) => {


    //接收post提交的参数
    let { usr, pwd, repwd } = req.body;

    var usrexp = /^[a-zA-Z]\w{5,11}$/;
    if (!usrexp.test(usr)) {
        res.send("<script>alert('帐号格式不正确 ');</script>");
        return

    }

    if (pwd != repwd) {
        res.send("<script>alert('密码不一致');</script>");
        return
    }

    let arr = uArr.filter(item => {
        return item.usr == usr;
    })

    if (arr.length == 1) { //用户存在
        res.send("<script>alert('用户已注册 过');</script>");

        return
    }


    if (!fs.existsSync(path.resolve(__dirname, '../data/users.json'))) { //文件不存在
        fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), JSON.stringify([]));
    }




    delete req.body.repwd;

    uArr.push(req.body);


    fs.writeFileSync(path.resolve(__dirname, '../data/users.json'), JSON.stringify(uArr));


    res.send(req.body);
});


//检查用户是否注册过
router.get('/chkuser', (req, res) => {
    //接参
    let curuser = req.query.user;

    let arrs = uArr.filter(item => {
        return item.usr == curuser;
    });

    let msg = '';
    let flag = '';
    if (arrs.length == 1) { //存在
        msg = '用户存在';
        flag = true;
    } else { //不存在 
        msg = '用户不存在';
        flag = false;
    }

    res.send({ msg, flag });
})



module.exports = router;