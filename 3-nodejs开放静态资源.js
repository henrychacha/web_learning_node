//引入http模块
const http = require('http');
//引入fs模块：操作文件或目录
const fs = require('fs');
//创建服务器
const server = http.createServer();
// 引入第三方包mimi 
const mime = require('mime');

// console.log(__dirname);
// console.log(__filename);

//监听事件:server.on();
server.on('request', (req, res) => {



    //获取请求中的path路径
    let paths = req.url;
    console.log(paths, 666);

    if(paths == '/'){
        paths = '/index.html'; // 首页
    }
    // let content = '';
    // if (paths.startsWith('/index.html')) { //首页
    //     content = fs.readFileSync(`${__dirname}/baofeng/index.html`);
    //     // console.log(content.toString());
    // } else if (paths.startsWith('/list.html')) { //列表页面

    // }

    // if (paths != '/js/theme/default/layer.css?v=3.1.1' && paths != '/favicon.ico') {
    //如果文件存在则读取文件内容
    if (fs.existsSync(`${__dirname}/baofeng${paths}`)) {
        //获取文件扩展名：
        let arr = paths.split('.');
        let extName = arr[arr.length - 1];
        // console.log(arr, extName);

        // res.setHeader('content-type', getContentye(extName));
        res.setHeader('content-type', mime.getType(extName));
        //读取文件内容
        let content = fs.readFileSync(`${__dirname}/baofeng${paths}`);

        res.write(content);
    }



    res.end();
});

//监听端口   // 修改为用mime包
server.listen(4000, () => {
    console.log('4000端口监听成功');
});

// function getContentye(exts) {
//     let str = '';
//     switch (exts) {
//         case 'html':
//             str = 'text/html;charset=utf-8';
//             break;
//         case 'js':
//             str = 'application/javascript';
//             break;
//         case 'css':
//             str = 'text/css';
//             break;
//         case 'gif':
//             str = 'image/gif';
//             break;
//         case 'png':
//             str = 'image/png';
//             break;
//         case 'jpg':
//             str = 'image/jpeg';
//             break;
//         case 'json':
//             str = 'application/json';
//             break;
//     }

//     return str;
// }