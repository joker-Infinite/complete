/*import express from 'express';
import socketIO from "socket.io";
export default (app, http) => {
    app.use(express.json());

    app.get('/foo', (req, res) => {
      res.json({msg: 'foo'});
    });

    app.post('/bar', (req, res) => {
      res.json(req.body);
    });

    // optional support for socket.io

    let io = socketIO(http);
    io.on("connection", client => {
      client.on("message", function(data) {
        // do something
      });
      client.emit("message", "Welcome");
    });
}*/

const express = require('express');
const mongoose = require("mongoose");
let db = mongoose.connect('mongodb://localhost:27017');
let app = express();

app.use('/user', require('./user'));
app.use('/store', require('./store'));

/*db.connection.on("error",function(error){
    console.log("数据库连接失败："+error);
});

db.connection.on("open",function(error){
    console.log("++++++数据库连成功++++++");
});*/


/*app.get('/userApi/getName', (req, res) => {
    res.send({
        name: '张三',
    })
});*/

app.listen(3000, () => {
    console.log('服务启动成功！');
});
