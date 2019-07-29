const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

const server = app.listen(4200, function () {

    const host = server.address().address;
    const port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host,port)

});