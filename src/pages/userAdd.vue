<template>
    <el-dialog title="新增用户" :visible.sync="visible" width="50%">
        <el-form
                ref="form"
                class="form"
                :model="formData"
                :rules="rules"
                label-width="100px"
                style="height: 300px"
        >
            <el-col :span="12">
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="性别：" prop="sex">
                    <el-radio-group v-model="formData.sex">
                        <el-radio label="男">男</el-radio>
                        <el-radio label="女">女</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="年龄：" prop="age">
                    <el-input-number
                            v-model="formData.age"
                            :min="1"
                            :max="150"
                    ></el-input-number>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="描述：" prop="remark">
                    <el-input
                            v-model="formData.remark"
                            type="textarea"
                            show-word-limit
                            maxlength="150"
                            rows="5"
                            resize="none"
                    ></el-input>
                </el-form-item>
            </el-col>
        </el-form>
        <div style="text-align: right">
            <el-button type="primary" @click="save(formData)">保存</el-button>
            <el-button type="info" @click="visible = false">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "userAdd",
        data() {
            return {
                visible: false,
                msg: '',
                reset: {
                    name: "",
                    age: 0,
                    sex: "男",
                    remark: "",
                    createTime: "",
                    updateTime: ""
                },
                formData: {},
                rules: {
                    name: [
                        {
                            type: "string",
                            required: true,
                            message: "请输入姓名",
                            trigger: "blur"
                        }
                    ],
                    age: [
                        {
                            type: "number",
                            required: true,
                            message: "请输入年龄",
                            trigger: "change"
                        }
                    ]
                }
            };
        },
        methods: {
            save(d) {
                let that = this;
                this.$refs["form"].validate(v => {
                    if (v) {
                        let msg;
                        let url;
                        if (this.msg === 'add') {
                            msg = '新增';
                            url = '/api/user/userAdd';
                            this.formData.createTime = this.timeFormat(new Date());
                        }
                        if (this.msg === 'update') {
                            msg = '修改';
                            url = '/api/user/update';
                            this.formData.updateTime = this.timeFormat(new Date());
                        }
                        this.axios
                            .post(url, d)
                            .then(res => {
                                that.$message({
                                    message: msg + "成功！",
                                    type: "success"
                                });
                                that.visible = false;
                                this.$emit("refresh", true);
                            })
                            .catch(e => {
                                that.$message({
                                    message: msg + "失败！",
                                    type: "warning"
                                });
                            });
                    }
                });
            },
            timeFormat(time) {
                let t = new Date(time);
                let Time = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate() + '  ' + t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();
                return Time;
            },
            openDialog(data, row) {
                this.visible = true;
                this.msg = data;
                if (data === 'add') {
                    this.formData = this.reset;
                }
                if (data === 'update') {
                    this.formData = row;
                }
            }
        }
    };
</script>

<style scoped lang="less">
    .form
    /deep/
    .el-col
    > .el-form-item
    > .el-form-item__content
    > .el-input-number {
        width: 100%;
    }

    .form /deep/ .el-col > .el-form-item > .el-form-item__label {
        font-size: 16px;
    }
</style>
