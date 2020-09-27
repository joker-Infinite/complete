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
        methods: {},
        mounted() {
            this.axios.get('/api/store/list', {
                params: {
                    id: 1
                }
            }).then(res => {
                this.res = res.data;
            })
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