const cmp = require('./5-computer.js');
console.log(cmp);

let x = new cmp('apple',1234);
x.output();
console.log(x.brand,x.price);

// 不需要使用服务器的代码 ，不需要stop code run ，直接右击 run code

// 国内的镜像服务器  www.npr.com

 // npm.taobao.org  

 // 将npm服务器切换到国内的淘宝服务器。一句一句地在终端中分别执行两行代码


 /* 
 npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

*/

