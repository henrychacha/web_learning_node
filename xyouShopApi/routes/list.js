const express = require('express');
const mysqlObj = require('../models/dbMysql');
const { Msg, paths } = require('../utils/message');
const router = express.Router();

//设计路由

//列表页面中所有一级分类
router.get('/firstcate', async(req, res) => {
    //查询所有一级分类 
    let sql = "select * from category_first";
    let [err, cates] = await mysqlObj.querys(sql);
    if (err == '') {
        res.send(Msg(200, '列表页一级分类查询成功', cates));
    } else {
        res.send(Msg(500, '列表页一级分类查询失败'));
    }

});


//查询某个一级分类下面的所有二级分类
router.get('/secondcate', async(req, res) => {

    //接参(一级分类id)
    let cateid = req.query.firstid;

    //查询属于某个一级分类下面的所有二级分类
    let sql = `select * from category_second where first_id='${cateid}'`;
    let [err, data] = await mysqlObj.querys(sql);

    if (err === '') {
        res.send(Msg(200, '查询成功', data));
    } else {
        res.send(Msg(500, '查询失败'));
    }

});

//查询某个二级分类下面的所有三级分类
router.get('/thirdcate', async(req, res) => {

    //接参(一级分类id)
    let cateid = req.query.secondid;
    let catereg = /^\d+$/;
    if (cateid == '') {
        res.send(Msg(500, '分类id不能为空'));
        return;
    } else if (!catereg.test(cateid)) {
        res.send(Msg(500, '分类id只能为数字'));
        return;
    }

    //查询属于某个一级分类下面的所有二级分类
    let sql = `select * from category_thired where second_id='${cateid}'`;
    let [err, data] = await mysqlObj.querys(sql);

    if (err === '') {
        res.send(Msg(200, '查询成功', data));
    } else {
        res.send(Msg(500, '查询失败'));
    }

});


// 查询某个三级类别下面的商品信息
router.get('/listcategoods',async(req,res)=>{
    // 接参 三级类别 id
    let {thirid,starts,limits} = req.query;
    let sql = `select g.good_id,concat('${paths}',g.image_url) as image_url,g.goods_name,g.goods_price,count(e.ide.i) as num from goods_list as g left join goods_eval as e on g.goods_id=e.goods_id where third_id = '${thirdid}' group by g.goods_id limit ${starts},${limits}`;
})
// console.log(sql ,66);
let[err,goods] = await mysqlObj.querys(sql);
if(err == ''){
    res.send(Msg(200,'查询成功',goods));
} else{
    res.send(Msg(500,'查询失败'));
}

// 查询某个三级分类下的商品总数
router.get('/catetatols',async (req,res)=>{
    sql = `select count(*) as n from goods_list where third_id='${cateid}'`;
    let [err,data] = mysqlObj.querys(sql);
    res.send(Msg(200,'成功',data)); 
});

// 查询某个三级分类下的商品总数
router.get('/catetatols',async(req,res)=>{
    
    // 接参(三级分类);
    let cateid = req.query.thirdid;
    sql = `select count(*) as n from goods_list where third_id='${cateid}' `;
    let [err,data] = await mysqlObj.querys(sql);
    if(err == ''){
        res.send(Msg(200,'查询成功',data));
        
    }else{

        res.send(Msg(500,'查询失败'));
    }
  })
  
module.exports = router;