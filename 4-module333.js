// var age = 20;

// function fn() {
//     console.log('fn在4-module.js文件中...');
// }

// console.log(arguments.callee.toString());// 打印出正在执行的函数，用于看到，node中每个js都被一个匿名函数所包裹，所以自定义模块中的代码不能像上面这样写啦。拿不到

//node自定义模块的语法：   

// 1)、单个暴露：
//  (1)使用 exports: 
//      exports.属性 = 属性值;
//      exports.方法 = 函数;

//  (2)使用module.exports:
//      module.exports.属性 = 属性值;
//      module.exports.方法 = 函数;

// 2)、批量暴露：
//  module.exports = {}

//****注意：单个暴露与批量暴露不能一起使用 ，否则只有批量暴露的数据



//单个暴露
exports.age = 21;
exports.fn = function() {
    console.log('fn在4-module.js文件');
}

module.exports.usr = 'lisi';
module.exports.demo = function() {
    console.log('demo在4-module.js文件中....');
}

//批量暴露
let obj = { "email": 'demo@163.com', "test": function() { console.log('testing....'); } };
module.exports = obj;

return module.exports;


//为什么单个暴露与批量暴露不能一起使用[exports与module.exports的区别]？
//因为exports是module.exports的引用，而module.exports是真实存在的，最终暴露的module.exports，如下：

// exports与module.exports的区别:
// module = { exports: {} };
// exports = module.exports;
// console.log(exports, module.exports, 111);

// module.exports = { d: 11, dem: function() {} };
// console.log(exports, module.exports, 2222);



// let x = {};
// let y = x;
// y.ok = 123;

// console.log(x, y);

// y = {};
// console.log(x, y);