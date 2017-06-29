const http=require('http');
const express=require('express');
const qs=require('querystring');
const user = require('./user');
var app=express();
http.createServer(app).listen(8080);
app.use(express.static('public'));
app.get('/',(req,res)=>{
    //请求重定向到另一个网页
    res.redirect('/html/my_index.html');
});

//处理POST请求主体数据的中间件
app.use((req,res,next)=>{
    //console.log(req.method);
    if(req.method==='POST'){
    req.on('data',(buf)=>{
        req.body=qs.parse(buf.toString()) ;
    console.log(req.body);
    next();
})
}else{
    next();
}

});
app.post('/user/register', user.register);
app.post('/user/login', user.login);
//app.get('/content/nows',content.nows);
