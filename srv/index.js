const express = require("express");
const dbPool = require("./common").dbPool;
const bodyParse = require("body-parser");
const router = express.Router();
let app = express();

app.use("/user", require("./user"));
app.use("/store", require("./store"));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

/*查询用户列表*/
/*router.get('/userList', function (req, res, next) {
    dbPool.getConnection(function (err, conn) {
        if (err) {
            res.send(err);
        } else {
            conn.query("select name from userdetails", function (err, result) {
                res.json(result);
                conn.release();
            })
        }
    })
});

/!*添加用户*!/
router.get('/userAdd', function (req, res, next) {
    res.render('userAdd')
});
router.post('/userAdd', function (req, res, next) {
    let name = req.body.name;
    let age = req.body.age;
    let sex = req.body.sex;
    let remark = req.body.remark;
    dbPool.query("insert into userdetails(name,age,sex,remark) values('" + name + "','" + age + "','" + sex + "','" + remark + "',)", function (err, rows) {
        if (err) {
            res.send('新增失败' + err);
        } else {
            res.redirect("/users");
        }
    })
});
/!*删除用户*!/
router.get("/del/:id", function (req, res) {
    let id = req.params.id;
    dbPool.query("delete from userdetails where id=" + id, function (err, rows) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/users");
        }
    })
});*/
app.use((req, res) => {
  throw "未找到对应接口!";
});
app.listen(3000, () => {
  console.log("服务启动成功！");
});
