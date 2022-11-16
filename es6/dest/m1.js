'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo = demo;
//单个暴露： 
//   export  let/var 属性名 = 值
//    export function 方法名(){}

var age = exports.age = 20;
var email = exports.email = 'lisi@qq.com';
function demo() {
    console.log('demo在m1.js文件中');
}