const mysql = require('mysql');
const { configure } = require('./config.js');
// console.log(conf);

//操作mysql数据库
class dbMysql {

    constructor() {
        //创建连接：   
        this.sqlObj = mysql.createConnection(configure);
        //开始连接
        this.sqlObj.connect();
    }


    //执行sql语句
    exec(sql) {
        return new Promise((resolve, reject) => {
            this.sqlObj.query(sql, (err, result) => {
                // console.log(err, result);
                if (err) { //失败
                    resolve([err, '']);
                } else { //成功
                    resolve(['', result]);
                }

            });

        });
    }

    async querys(sqls) {
        let data = await this.exec(sqls);
        //  console.log(data, 999);
        return data;
    }

}


// let obj = new dbMysql();
// //obj.exec('select * from xsb');

// //注意：调用这个obj.querys()方法本身是同步的，该方法会返回一个Promise对象
// // let d = obj.querys('select * from xsb');
// // console.log(d, 888);


// async function test() {
//     let d = await obj.querys('select *  from xsb');
//     console.log(d, 666);
// }

// test();

module.exports = new dbMysql();