/* 

    需求：
     用户端输入姓名，服务端在数据库中查询该用户的信息并反馈回用户端
    添加用户信息到数据库


*/
/* 
    安装nodejs的mysql模块
首先要选定一个数据库，我选择mysql。首先要安装mysql模块。
==>> npm install mysql安装mysql模块。

安装成功之后引入mysql， require('mysql');有一点需要注意，如果你的项目文件夹在nodejs根目录下，那么按照上面的方法是可以正常工作的，如果你和我一样是在其他的磁盘或文件夹中新建的项目，那么你讲获取不到mysql对象或者获取的是空对象，知晓原因，解决这个问题也很方便，一是将项目文件放在nodejs文件下，而是讲node_modules文件夹拷贝到项目跟文件夹

---------------

项目中需要运用到一个组件，使用cnpm下载了依赖，去node_modules里看了有，但是去package.json里没找到，找了半天找到了解决办法：

cnpm i 需要的包名 -S
*/


const express = require('express');
const mysql = require('mysql');
const app = express();
app.listen(4000, () => {
    console.log('server port at 4000')
})

console.log(mysql);


/* 


    执行sql语句
    setSql.query('sql语句'[,参数],(err,result)=>{})

    query方法是异步执行, 外面的console.log()更早执行，err和result也无法拿到外面用。
*/

/* 
    创建连接
*/
let setSql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19970406', // 密码是纯数字，也要加引号
    port: '3306', // 端口可以写数字
    database: 'demo'

});

//开始连接
setSql.connect();
// return; 使用return来逐步排错


/* 
    添加数据 路由
*/

app.get('/add', (req, res) => {
    //接参
    let {
        xh,
        xm,
        sex,
        age,
        szx
    } = req.query;
    // 添加sql

    /* 
        // 执行添加sql语句
    */

    /* 
        防止sql注入 ，别有用心的人输入特殊字符攻击数据库，绕开密码等
        处理特殊的字符
        用问号占位，在query()中使用参数

    */
    /* 
       let sql = `insert into xsb(xh,xm,sex,age,szx)values('${xh}','${xm}','${sex}','${age}','${szx}')`;

    setSql.query(sql, (e, d) => {
        console.log(e, d); // null  关注affectrow：1
        res.send('添加成功');
    })
    
    
    */
    
    /* 
        主键不能重复传入
    
    */
    let sql =`insert into xsb(xh,xm,sex,age,szx)values(?,?,?,？,?)`;
    


    setSql.query(sql, [xh, xm,sex,age, szx], (e, d) => {
        console.log(e, d);
        res.send('添加成功');
    })

    


})

// 查询数据路由：

app.get('/find', (req, res) => {
    /* 
        接参
    */
    let curusr = req.query.usr ? req.query.usr : '';
    let cond = '';
    if (curusr != '') {
        cond = `where xm = ‘${curusr}’ `
    }

    // 查询所有学生信息
    let sql = `select * from xsb ${cond}`;
    setSql.query(sql, (e, d) => {
        console.log(e, d) //  null  数组对象
        let str = '';
        d.forEach(item => {
            console.log(item)

            str += `<li>${item.xm} | ${item.age} | ${item.sex}</li> `


        });
        res.send(`<ul> ${str}</ul>`) // 这个要放在setSql里面，因为setSql是异步执行的，放在外面就会先执行res.send()
    })


})


/* 

    解决报错问题
    MYSQL：ER_NOT_SUPPORTED_AUTH_MODE:Client does not support authentication protocol

    node使用mysql报错。

    原因：登录数据库的客户端跟mysql8.0不兼容了，mysql8.0密码认证采用了新的密码格式

    解决办法：
    在系统mysql终端输入下面命令

    //password 是你的数据库账户密码，root和host也是
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

*/

/* 
    排错方法
    1、 使用return
    2、 把报错放到百度上搜索。可以搜到中文社区的解决方法

*/