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

export { age as nl, usr, demo }