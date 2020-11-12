<template>
  <div class="container">
    <div class="btnBar">
      <el-button @click="btnClick(1)" type="primary">新增</el-button>
      <el-button @click="btnClick(2)" type="info">修改</el-button>
      <el-button @click="btnClick(3)" type="danger">删除</el-button>
    </div>
    <div class="table">
      <el-table
        ref="elTable"
        :data="tableData"
        width="100%"
        style="height: 100%"
        border
        highlight-current-row
        @selection-change="selectionChange"
        @current-change="selectionChange"
      >
        <!--<el-table-column
                        type="selection"
                        align="center"
                        width="55">
                </el-table-column>-->
        <el-table-column label="序号" align="center" type="index" width="50">
        </el-table-column>
        <el-table-column
          align="center"
          v-for="(item, index) in columns"
          :label="item.label"
          :prop="item.code"
          v-if="!item.hidden"
        ></el-table-column>
      </el-table>
    </div>
    <user-add ref="userAdd" @refresh="refresh"></user-add>
  </div>
</template>

<script>
import UserAdd from "./userAdd";

export default {
  name: "Home",
  components: { UserAdd },
  data() {
    return {
      columns: [
        { code: "id", label: "主键Id", hidden: true },
        { code: "name", label: "姓名" },
        { code: "age", label: "年龄" },
        { code: "sex", label: "性别" },
        { code: "remark", label: "描述" },
        { code: "createTime", label: "创建时间" },
        { code: "updateTime", label: "修改时间" }
      ],
      tableData: [],
      selectData: []
    };
  },
  methods: {
    selectionChange(data) {
      this.selectData = data;
    },
    btnClick(n) {
      if (n === 1) {
        this.userAdd();
      }
      if (n === 2) {
        this.userRevise();
      }
      if (n === 3) {
        this.userDelete();
      }
    },
    //新增
    userAdd() {
      this.$refs["userAdd"].openDialog();
    },
    //修改
    userRevise() {},
    //删除
    userDelete() {
      this.axios
        .get("/api/user/del", {
          params: {
            id: this.selectData.id
          }
        })
        .then(res => {
          this.$message({
            message: "删除成功！",
            type: "success"
          });
          this.refresh();
        })
        .catch(e => {
          this.$message({
            message: "删除失败！",
            type: "success"
          });
        });
    },
    refresh() {
      this.tableData = [];
      this.$axios.get("/api/user/userList").then(res => {
        this.tableData = res.data;
      });
    }
  },
  mounted() {},
  created() {
    this.refresh();
    /* this.axios.post('/api/user/userAdd', data).then(res => {
                         console.log(res);
                     });*/
    /*this.axios.get('/api/user/del', {
                        params: {
                            id: 1
                        }
                    }).then(res => {

                    })*/
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  height: 950px;
  background: #fff;
  align-items: stretch;

  .btnBar {
    width: 95%;
    text-align: left;
    margin: 10px 2.5%;
  }

  .table {
    width: 95%;
    height: 95%;
    margin: 0 2.5%;
  }
}
</style>
