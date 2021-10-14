# swagger-to-api

> Convert Swagger Docs to axios API

## how to use

1. 复制swagger的docs接口数据至`json`文件内的任意json文件中，如需使用远程url可自行修改`src/main.js`中的docs引入代码
2. 在`sta.config.json`中配置你的json地址、文件头、和api模板，其中api模板具有`$name`函数名、`$arg`接收参数、`$config`axios.request参数、`$comment`注释
3. 使用`yarn upi`或者`npm run upi`进行转换，转换后的文件会生成`apis`文件夹下
