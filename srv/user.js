const express = require("express");
const bodyParse = require("body-parser");
const dbPool = require("./common").dbPool;

let router = express.Router();
router.use(bodyParse.json());
router.use(bodyParse.urlencoded({ extended: false }));
/*查询用户列表*/
router.get("/userList", function(req, res, next) {
  dbPool.getConnection(function(err, conn) {
    if (err) {
      res.send(err);
    } else {
      conn.query("select * from userdetails", function(err, result) {
        res.json(result);
        // conn.release();
      });
    }
  });
});

/*添加用户*/
router.post("/userAdd", function(req, res, next) {
  let name = req.body.name;
  let age = req.body.age;
  let sex = req.body.sex;
  let remark = req.body.remark;
  let createTime = req.body.createTime;
  dbPool.query("select * from userdetails", function(err, result) {
    let names = "";
    result.forEach(i => {
      names += i.name + ",";
    });
    if (names.indexOf(name) === -1) {
      dbPool.query(
        "insert into userdetails(name,age,sex,remark,createTime) values('" +
          name +
          "','" +
          age +
          "','" +
          sex +
          "','" +
          remark +
          "','" +
          createTime +
          "')",
        function(err, rows) {
          if (err) {
            res.send("新增失败" + err);
          } else {
            res.json({
              msg: "成功！"
            });
          }
        }
      );
    } else {
      res.send("此用户已存在！");
    }
  });
});
/*删除用户*/
router.get("/del", function(req, res) {
  let id = req.query.id;
  dbPool.query("delete from userdetails where id=" + id, function(err, rows) {
    if (err) {
      res.send(err);
    } else {
      res.json({
        msg: "成功！"
      });
    }
  });
});
/*修改用户*/
router.post("/update", function(req, res, next) {
  let id = req.body.id;
  let name = req.body.name;
  let age = req.body.age;
  let sex = req.body.sex;
  let remark = req.body.remark;
  let updateTime = req.body.updateTime;
  let sql =
    "update userdetails set name='" +
    name +
    "',age='" +
    age +
    "',sex='" +
    sex +
    "',remark='" +
    remark +
    "',updateTime='" +
    updateTime +
    "' where id=" +
    id;
  dbPool.query(sql, function(err, rows) {
    if (err) {
      res.send(err);
    }
  });
});
module.exports = router;
