
const express = require('express'); 
const app = express();
app.listen(3000,(res,req)=>{
    console.log('server start at port 3000');
});

const path = require('path');
const fs = require('fs');

// 使用内置中间件express.urlencoded()接收post提交的参数
// 解析表单编码格式为 enctype='application/x-www-form-urlencoded"的表单
app.use(express.urlencoded({extended:true}));

/* 
    上面的代码，需要放到所有路由的前面，而不是后面，才能执行
    不管是express自定义的，内置的，还是第三方的中间件，都要放到最前面
*/




app.use('/public',express.static(path.resolve(__dirname,'public')));
app.get('/',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'2 reg.html'));
})
app.post('/loginact',(req,res)=>{

    let {use,pwd,pwd2} =  req.body;
      res.send(req.body);

    // res.send('成功');
})






// built - in 