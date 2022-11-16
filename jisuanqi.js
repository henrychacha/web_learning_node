// function jsq(m, n, flg = '+') {
//     let num = 0;
//     switch (flg) {
//         case '+':
//             num = m + n;
//             break;
//         case '*':
//             num = m * n;
//             break;
//         case '-':
//             num = m - n;
//             break;
//         case '/':
//             num = m / n;
//             break;
//     }

//     return num;
// }

// //批量暴露
// module.exports = { jsq };


//单个暴露  
// module.exports.jsq = function(){

// }

exports.age = 20;
exports.jsq = function(m, n, flg = '+') {
    let num = 0;
    switch (flg) {
        case '+':
            num = m + n;
            break;
        case '*':
            num = m * n;
            break;
        case '-':
            num = m - n;
            break;
        case '/':
            num = m / n;
            break;
    }

    return num;
}