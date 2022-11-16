/* 

    使用live server来运行html页面    
    静态商城项目界面在一个服务器上
    接口是部署在另一个服务器上。
    接口可以给pc端用，也可以给移动端用

    先写接口，接口通过以后，然后到前端里用ajax调用接口，调用完数据
    先开发接口，然后把html页面改成动态

*/

/* 
    首页是一个路由件，列表页是一个路由件，详情页也是一个路由件
    
*/

/* 
    封装好的class在以后的情况下也可以使用，把封装的类放到项目里
*/

/*
    安装mysql包，创建mysql包
 */

const mysql = require('mysql');
const {configure} = require('./5-config')


// 操作mysql的数据库
class dbMysql{
    constructor(){
        // 创建连接
         this.sqlObj = mysql.createConnection(configure)
        // 开始连接
        this.sqlObj.connect();

    }
    //执行sql语句
    exec(sql){
      return  new Promise((resolve,reject)=>{
            this.sqlObj.query(sql,(err,result)=>{
                // console.log(err,result)
                if(err){// 失败  当err没有的时候，是nll，这是if中是false
                    resolve([err,''])
            }else{//成功
                resolve(['',result]);
            }
        }
        )
        })
       
    }

    async querys(sqls){
        let data = await this.exec(sqls); // 这里调用方法要记得写this
        // console.log(data,999);
        return data;
    }
}

let obj = new dbMysql();
// obj.exec('select * from xsb');

/* 
注意： 调用这个obj.querys()方法本身是同步的，该方法会返回一个promise对象
let d = obj.querys('select * from xsb');
console.log(d) // 返回promise的状态 Promise { <pending> } 而不是拿到数据

*/

async function test(){
       let d = await obj.querys('select * from xsb');
       console.log(d,666);
}       
test();