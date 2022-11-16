var express = require('express');
var router = express.Router();

//用户注册

router.post('/register',(req,res)=>{

    res.send(req.body);
});

module.exports = router;