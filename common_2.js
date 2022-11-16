//发送ajax请求  
function sendAjax({ url, data = {}, type = 'get', dataType = 'json' } = {}) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            data,
            type,
            dataType,
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