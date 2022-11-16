//深浅拷贝是针对的复杂数据类型：对象、数组   

let obj = {};
// let obj2 = obj;
obj2 = JSON.parse(JSON.stringify(obj));
obj2.x = 22;
console.log(obj, obj2);



//浅拷贝： 只复制某个对象的内存地址，并不复制对象本身，共用一个内存空间，改变其中一个对象会影响另外一个对象。 


//深拷贝：复制并创建对象本身，在内存中重新开辟内存空间，对象之间互不影响。改变其中一个对象不会影响另外一个对象

let obj3 = {
    "age": 21,
    "usr": 'demo',
    "eat": function() {
        console.log('eat...');
    }
};

//注意：这种深拷贝不能拷贝对象中的方法，但可以使用浅拷贝+递归来解决
let obj4 = JSON.parse(JSON.stringify(obj3));
console.log(obj3, obj4);

let obj5 = deepCopy(obj3);
console.log(obj3, obj5);

let arr = [1,2,3,4,5];
console.log(deepCopy(arr));

//浅拷贝+递归
function deepCopy(obj) {
    if (Object.prototype.toString.call(obj).slice(8, -1) == 'Object') {
        var result = {}    } else if (Object.prototype.toString.call(obj).slice(8, -1) == 'Array') {
        var result = []
    } //判断数据类型类型  如果是数组则初始一个  []  如果是一个Object则初始一个 {}


    //浅拷贝，但是+ 递归思想，就实现了深拷贝
    //数组也可以使用for in 方法，其中attr是item
    for (var attr in obj) {
        if (typeof obj[attr] == 'object') {
            result[attr] = deepCopy(obj[attr])
        } else {
            result[attr] = obj[attr]
        }
    }
    return result
}

/* 
Object.prototype.toString.call(null);//”[object Null]”
Object.prototype.toString.call(undefined);//”[object Undefined]”
Object.prototype.toString.call(“abc”);//”[object String]”
Object.prototype.toString.call(123);//”[object Number]”
Object.prototype.toString.call(true);//”[object Boolean]”

*/