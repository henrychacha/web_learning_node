//nodejs模块分为三种：内置模块、自定义模块、第三模块(包)


//一级域名：baidu.com  
// www.baidu.com   music.biadu.com  fanyi.baidu.com

//内置模块：
const path = require('path');
const url = require('url');


let cururl = "http://www.baidu.com:3000/mydemo/test/index.php?uid=21&usr=lisi";
let obj = url.parse(cururl);
// console.log(obj, obj.pathname);
//获取文件扩展名
let ext = path.extname(obj.pathname);
console.log(ext);





// path.join(): 将路径片段拼装在一起， 需要注意的是使用当前平台中的分隔符来拼装， window使用的是: \(反斜杠), linux使用的是: /(斜杠) 

// resolve() 方法，把不同的路径片段，拼接成一个完整的绝对路径，./是当前模块，../是返回到上一级模块
let p = `${__dirname}mydemo/123.html`;
let curpath = path.resolve(__dirname, './mydemo/123.html');
console.log(curpath);
curpath = path.resolve(__dirname, '../mydemo/123.html');
console.log(curpath);

curpath = path.resolve(__dirname, './mydemo/yesok/', '../test/123');
console.log(curpath);
