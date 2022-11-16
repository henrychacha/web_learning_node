/* 
    老师写的，小u商城主页的接口

*/

var express = require('express');
const mysqlObj = require('../models/dbMysql.js');
const { Msg, paths } = require('../utils/message.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



//获取一级分类：  
router.get('/catefirst', async(req, res) => {

    let sql = "select * from category_first";
    let [err, data] = await mysqlObj.querys(sql);
    // console.log(err, data);
    if (err === '') {
        res.send({ "code": "200", "msg": "一级分类获取成功", data });
    } else {
        res.send({ "code": "500", "msg": "一级分类获取失败" });
    }

});

//首页限时抢购：  
router.get('/saleact', async(req, res) => {
    //查询所有的抢购活动信息：  
    let sql = "select * from flash_sale";
    let [err, sales] = await mysqlObj.querys(sql);

    //当前时间戳
    let nowtime = new Date().getTime();

    let curHour = new Date().getHours();
    let nextHour = curHour + 1;
    if (nextHour > 24) {
        nextHour = 0;
    }

    let timeArr = [curHour, nextHour];

    await Promise.all(sales.map(async(item, ind) => {
        item['hours'] = timeArr[ind];

        //查询每个抢购活动的商品信息：   
        sql = `select g.goods_id,g.goods_name,concat('${paths}',g.image_url) as image_url,g.goods_price,sum(s.goods_num) as num  
        from flash_product  as f left join goods_list as g 
        on f.goods_id=g.goods_id 
        left join shopcar as s  on g.goods_id=s.goods_id 
        where flash_id='${item.flash_id}'  
        group by s.goods_id`;

        [, goods] = await mysqlObj.querys(sql);

        item['list_goods'] = goods;
        //  console.log(item, 666);
    }));

    //将当前服务器时间戳放在sales数组的头部
    sales.unshift(nowtime);
    console.log(sales);
    // console.log('find ok');
    res.send(Msg(200, '抢购活动数据查询成功', sales));

});

//首页排行榜
router.get('/topbang', async(req, res) => {

    //查询评价最高的4个分类
    let sql = `select c.thired_id,c.thired_name from goods_eval as e  left join goods_list as g 
    on e.goods_id=g.goods_id 
    left join  category_thired as c on g.thired_id=c.thired_id  
    group by e.goods_id order by sum(e.eval_start) desc,c.thired_id desc    limit 4`;

    let [err, cateArr] = await mysqlObj.querys(sql);

    if (err === '') { //查询成功
        await Promise.all(cateArr.map(async(item, ind) => {
            //查询每个类别中评价最高的3个商品
            sql = `select g.goods_id,g.goods_name,g.goods_price,concat('${paths}',g.image_url) as image_url  from goods_eval as e left join goods_list as g 
            on e.goods_id=g.goods_id where g.thired_id='${item.thired_id}'  group by e.goods_id 
            order by sum(e.eval_start) desc limit 3 `;
            // console.log(sql, 777);
            [, goods] = await mysqlObj.querys(sql);
            item['cate_goods'] = goods;
        }));

        res.send(cateArr);

    } else { //查询失败
        res.send(Msg(500, '查询评价最高分类失败'));
    }

});



module.exports = router;