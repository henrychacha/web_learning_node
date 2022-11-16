//发送ajax请求  
function sendAjax({ url, data = {}, type = 'get', dataType = 'json' } = {}) {
    url = 'http://localhost:3000' + url;
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            data,
            type,
            dataType,
            headers: {
                Authorization: localStorage['token']
            },
            success: function(d) {
                resolve(d);
            },
            error: function(e) {
                //   reject(e);
                alert(e);
            }
        });

    });

}
 
//获取url地址中的参数 (针对前段页面接参的封装方法而不是后端路由接参)
function getSearchArg(argName) {
    // 去掉锚点连接
    let theHref = window.location.href;
    let searchStr;
    if (theHref.indexOf("#") > -1) {
        searchStr = theHref.substr(0, theHref.indexOf("#"));
    } else {
        searchStr = theHref.substr(0);
    }
    let [, arr = ""] = searchStr.split("?");
    let argArr = arr.split("&");
    for (let i = 0; i < argArr.length; i++) {
        let smallArgArr = argArr[i].split("=");
        if (smallArgArr[0] === argName) {
            console.log(smallArgArr[1], 996);
            return decodeURIComponent(smallArgArr[1]); // decodeURIComponent方法: URL编码转换成中文的
        }
    }
    return "";
};

//根据关键词搜索
function seachgoods() {
    location.href = 'search.html?stxt=' + $("#keywords").val();
}