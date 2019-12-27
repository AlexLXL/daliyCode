// 一些注意点:
// 如果是使用其它请求方式，jq、axios等，最好百度一下responseType的设置
// 确定接口没有跨域问题（即使后台说已经全部处理跨域，我的项目出现就这一个接口出现跨域）（另外一个小知识点postman不存在跨域）（可能出现传参跨域，不传参不跨域的问题）
// 该请求为post方式

// html代码
<el-button type="primary" icon="el-icon-download" title="下载" @click="request"></el-button>

// js代码
request () {
    const req = new XMLHttpRequest();
    // 请求路径（改成自己的）
    req.open('POST', '<自己的路径>', true);
    // 设置返回的数据类型是blob（将文档流转化为blob）
    req.responseType = 'blob';
    // 设置请求传参的方式，因为我的项目只能FormData验证token，所以只能这样（改成自己的）
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.onload = function() {
        const data = req.response;
        // 创建Blob，注意传的是数组
        const blob = new Blob([data]);
        // 将当前文件映射到这个url
        const blobUrl = window.URL.createObjectURL(blob);
        // 创建a标签并下载
        self.download(blobUrl) ;
    };


    // 处理请求参数（示例）
    self.tableData.forEach((item) => {
        item.remarkLog = "";
        item.realStockAdd = item.realStockAdd + "";
    })
    let param = {
        token:serviceHelper.getToken(),
        dataList:JSON.stringify(self.tableData),
    }
    // 拼凑出合法的formData参数：格式：路径?name=123&age=18（使用var a = new FormData();a.append(key,value)不符合我的项目的传参格式）
    let formData = '';
    for (let key in param) {
        if(typeof  key == 'object') formData += '&' + key + '=' + JSON.stringify(param[key])
        else formData += '&' + key + '=' + param[key]
    }

    // 发送请求
    req.send(formData.slice(1));
},
// 创建a标签下载
download(blobUrl) {
    // 创建a标签
    const a = document.createElement('a');
    // 文件名称（如果是动态的，可以用响应头里面的数据）
    a.download = '领料单.docx';
    // 设置a标签的href
    a.href = blobUrl;
    // 模拟点击
    a.click();
}