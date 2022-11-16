//什么是中间件？  
//中间件就是在接收请求之后返回响应之前要执行的函数，而这些函数有一定的业务处理能力。

//中间件分为三种：自定义中间件、内置中间件、第三方中间件

//中间件语法：app.use(['路径',],函数);

//注意：
//   1)使用中间件要注意代码的存放位置，通常使用中间件的代码放在所有路由的最前面
//   2)当给next()方法传参时，会查找含有err、req、res、next四个参数的中间件

const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('server port 3000');
});


//设计路由：   app级别路由写法




// app.use((req, res) => {

//     console.log('use....');
// });

app.get('/teacher', (req, res) => {

    // res.writeHead(200, 'ok', { "content-type": "text/html;charset=utf-8" });
    res.end('这是老师相关信息');
});

//自定义中间件
function demo(req, res, next) {
    console.log('use demo.');
    res.writeHead(200, 'ok', { "content-type": "text/html;charset=utf-8" });
    // next(); //查找并执行对应的路由
    //注意：当给next()方法传参时，会查找含有err、req、res、next四个参数的中间件

    let y = test();
    console.log(y, 8888);
    if (y) {
        next();
    } else {
        next('error message...');
    }

}

function test() {
    return 'abc';
}

app.use(demo);

app.get('/student', (req, res) => {

    res.end('学生信息');
});

// app.get('/', (req, res) => {

//     res.end('首页');
// });

app.all('*', (req, res) => {

    res.end('404错误');
});

app.use((err, req, res, next) => {
    console.log(err, 6666);

    res.end(err);
});