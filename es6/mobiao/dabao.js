(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _m = require('./m1.js');

var _m2 = require('./m2.js');

console.log(_m.age, _m.email, _m.demo); //使用模块：  
// import {属性名/方法名}  from '模块文件名'

console.log(_m2.nl, _m2.usr, _m2.demo);
},{"./m1.js":2,"./m2.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//批量暴露:  
// let 属性名1 = 值
// var 属性名2 = 值  
// function 方法名(){}
// export {属性名1,属性名2,方法名}

var age = 19;
var usr = 'Tom';

function demo() {
    console.log('demo 在m2.js文件中');
}

exports.nl = age;
exports.usr = usr;
exports.demo = demo;
},{}]},{},[1]);
