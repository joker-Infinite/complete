<template>
    <div class="container">
        <div class="ECharts_box" v-for="i in res">
            <div class="title">{{i.title}}</div>
            <div class="title_sub">{{i.subtitle}}</div>
            <img :title="i.imgTitle" :src="i.img" class="img"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                res: []
            }
        },
        methods: {
            getData(v) {
                let id = {
                    'id': v
                };
                this.axios.post("/api/store/update", id).then(res => {
                    console.log(res.data)
                });
            }
        },
        mounted: async function () {
            const [res, data] = await Promise.all([this.axios.get("/api/store/list", {params: {id: 1}}), this.axios.get("/api/user/getName")]);
            console.log(res);
            console.log(data);
            this.axios.get('/api/store/list', {
                params: {
                    id: 1
                }
            }).then(res => {
                this.res = res.data;
            });

            // this.axios.get("/api/store/222").then(res => {
            //     console.log(res);
            // });
            this.getData(1);
            setTimeout(_ => {
                this.getData(2)
            }, 5000)
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
        background: #333;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        overflow-y: scroll;

        .ECharts_box {
            width: 30%;
            height: 500px;
            background: #FFF;
            margin-bottom: 50px;
            overflow: hidden;
            position: relative;

            .title {
                position: absolute;
                width: 100%;
                height: 50px;
                text-align: center;
                line-height: 50px;
                font-size: 30px;
                font-weight: 700;
                top: 0;
                left: 0;
                font-family: "Microsoft YaHei UI";
            }

            .title_sub {
                width: 100%;
                position: absolute;
                top: 50px;
                font-size: 20px;
                text-align: center;
            }

            .img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>