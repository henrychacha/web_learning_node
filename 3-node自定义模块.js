//node自定义模块：
//   在node中每个.js文件都是一个封闭的空间，因为每个.js文件被一个匿名函数所包裹，如下：
// function (exports, require, module, __filename, __dirname) { var age = 20;
// exports = module.exports;   //自己添加的
//     function fn() {
//         console.log('fn在4-module.js文件中...');
//     }

//     console.log(arguments.callee.toString());
//     }  
//  module.exports = {};  //自己添加的
//  return module.exports;  //自己添加的
// }




//node中引入自定义模块使用require():要注意路径必须以./或../开头，自定义模块文件名尽量要写完整的文件名包括扩展名，如果只写文件名，则依次按.js、.json、.node去查找文件。

// const m4 = require('./4-module.js');
const m4 = require('./4-module');
// console.log(m4, m4.age, m4.usr);
// m4.fn();

console.log(m4);