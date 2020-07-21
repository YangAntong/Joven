const http = require('http');
const url = require('url');
http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.end('Hello World');
    if(req.url != '/favicon.ico'){
        var userInfo = url.parse(req.url,true).query;
        console.log(userInfo.username+"---"+userInfo.age)    
    }
    
}).listen(10030);

console.log('Server running at http://127.0.0.1:10030?username=杨安童&age=18');