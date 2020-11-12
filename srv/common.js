//引入
const common = require("mysql");
//创建连接池
exports.dbPool = common.createPool({
  host: "localhost",
  database: "user",
  user: "root",
  password: "root"
});
