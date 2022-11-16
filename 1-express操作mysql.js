const express = require('express');
const mysql = require('mysql');
const app = express();

app.listen(8080, () => {
    console.log('server port at 8080');
});

// console.log(mysql);

//创建连接：   
let sqlObj = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19970406',
    port: '3306',
    database: 'demo'
});
//开始连接
sqlObj.connect();

//执行sql语句： 
//注意：query()方法是异步方法 
// sqlObj.query('sql语句'[,参数],(err,result)=>{});

//添加数据：   
app.get('/add', (req, res) => {

    //接参  
    let { xh, xm, sex, age, szx } = req.query;
    //添加sql：  
    // let sql = `insert into xsb(xh,xm,sex,age,szx)values('${xh}','${xm}','${sex}','${age}','${szx}')`;
    let sql = `insert into xsb(xh,xm,sex,age,szx)values(？,？,?,？,？)`;

    //执行添加sql语句：
    sqlObj.query(sql,[xh,xm,sex,age,szx], (err, result) => {
        console.log(err, result);
    })


    res.send('添加');
});

//查询数据：
app.get('/find', (req, res) => {

    //接参：
    let curusr = req.query.usr;
    let cond = '';
    if (curusr != '') {
        cond = `where xm='${curusr}'`;
    }


    //查询所有学生信息   
    let sql = `select *  from xsb ${cond}`;
    sqlObj.query(sql, (err, result) => {
        console.log(err, result);

        let str = '';
        result.forEach(item => {
            str += `<li>${item.xm} | ${item.sex}  | ${item.age}</li>`;
        });

        res.send(`<ul>${str}</ul>`);
    });


    //  console.log('testing....', 999);


});