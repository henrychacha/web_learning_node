const express = require('express');
const mysqlObj = require('../models/dbMysql');
const { Msg, paths } = require('../utils/message');
const auths = require('../utils/auth');
const router = express.Router();

//设计路由


//根据商品id获取商品相关数据
router.get('/getgoodsinfo', async(req, res) => {

    let dataObj = {};
    //接参(商品id)
    let ids = req.query.gid;
    console.log(ids, 888);

    //查询商品基本信息及类别名称
    let sql = `select g.goods_id,g.goods_price,g.goods_name,f.first_name,s.second_name,c.thired_name  from goods_list as g 
    left join category_first as f
    on g.first_id=f.first_id 
    left join category_second as s 
    on g.second_id=s.second_id
    left join category_thired as c
    on g.thired_id=c.thired_id 
    where g.goods_id='${ids}'`;
    console.log(sql, 111);
    let [, data] = await mysqlObj.querys(sql);
    dataObj.goods = data;

    //查询商品图片
    sql = `select concat('${paths}',file_name) as fileimg from goods_image where goods_id='${ids}'`;
    let [, images] = await mysqlObj.querys(sql);
    dataObj.img = images;

    //查询商品规格
    sql = `select * from goods_style where goods_id='${ids}'`;
    let [, styles] = await mysqlObj.querys(sql);
    dataObj.style = styles;

    //查询商品评论
    sql = `select e.*,concat('${paths}',m.head_photo_url) as photo_url  from goods_eval as e left join member as m on e.uid=m.uid where e.goods_id='${ids}'`;
    let [, evals] = await mysqlObj.querys(sql);
    dataObj.eval = evals;

    console.log(dataObj, 777);
    res.send(Msg(200, '商品相关数据查询成功', dataObj));
});

//加入购物车
router.get('/shopadd', async(req, res) => {
    // console.log(req.headers.authorization, 887);

    //注意：使用Token(jwt数据)之后req对象里有个uid属性，其值为已登录用户id
    auths.decodeToken(req);

    //接参(商品id,商品规格、商品数量)
    let { goods_id = '', goods_num = 0, goods_style = '' } = req.query;

    goods_style = [JSON.parse(goods_style)];
    // console.log(goods_style, 889);
    // return;

    //根据商品id判断商品是否存在
    let sql = `select count(*) as n  from goods_list where goods_id='${goods_id}'`;
    let [e, goods] = await mysqlObj.querys(sql);
    if (goods[0].n == 0) {
        res.send(Msg(500, '该商品不存在，非法操作'));
        return
    }

    //判断当前用户是否添加过该商品
    sql = `select count(*) as num from shopcar where uid='${req.uid}' and goods_id='${goods_id}'`;

    let [, result] = await mysqlObj.querys(sql);
    if (result[0].num > 0) { //该商品已添加过
        res.send(Msg(500, '该商品已添加过'));
        return;
    }

    // sql = `insert into shopcar(uid,goods_id,style_obj,goods_num)values('${req.uid}','${goods_id}','${JSON.stringify(goods_style)}','${goods_num}')`;

    sql = `insert into shopcar(uid,goods_id,goods_num,style_obj)values('${req.uid}','${goods_id}','${goods_num}','111243')`;

    let [err, data] = await mysqlObj.querys(sql);

    if (err === '') {
        res.send(Msg(200, '添加成功'));
    } else {
        res.send(Msg(500, '添加失败'));
    }

});

module.exports = router;