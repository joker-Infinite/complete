const express = require("express");
const bodyParse = require("body-parser");

let router = express.Router();


router.use(bodyParse.json());
router.use(bodyParse.urlencoded({extended: false}));
router.get('/list', (req, res, next) => {
    if (!req.query.id) {
        res.send({
            msg: "参数为空！"
        })
    } else {
        res.json([
            {
                "title": '图片——1',
                "subtitle": '图片',
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601204997810&di=bb85bb154ff32cace8adceea6c350d92&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F4ba4487c44da0865a934a67fb36f7476d99e506717691-YgBefA_fw658",
                "imgTitle": '几何',
                "name": {}
            },
            {
                "title": '图片——2',
                "subtitle": '图片',
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601204997810&di=3ec1bc1e035e34dd42e056da3102ed34&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F537311c16fb668a535e31e8158f7a1fbaacec6cf1b9ce-2aImkl_fw658",
                "imgTitle": '几何',
                "name": {}
            },
            {
                "title": '图片——3',
                "subtitle": '图片',
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601204997809&di=f941a328f6cbc8aae98bcb13048b0752&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F65%2F51%2F0557aea9053e35a.jpg",
                "imgTitle": '几何',
                "name": {}
            },
            {
                "title": '图片——4',
                "subtitle": '图片',
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601204997809&di=3e9e5233105c86e22e65421d1d564db6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff923076889a768c839a2a8e76060bb84a79ef58986dea-cH7owX_fw658",
                "imgTitle": '几何',
                "name": {}
            },
            {
                "title": '图片——5',
                "subtitle": '图片',
                "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601204997809&di=7e2c1d50a9b7055fb82d4dcca1980217&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fbackgd%2Fcover%2F00%2F50%2F48%2F5c0e497a0bcc5.jpg%2521%2Ffw%2F780%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue",
                "imgTitle": '几何',
                "name": {}
            }
        ])
    }
});

router.post('/update', ((req, res, next) => {
    if (!req.body.id) {
        res.send({
            msg: "参数为空！"
        })
    }
    if (1 === req.body.id) {
        res.send({
            success: '第一页'
        })
    }
    if (2 === req.body.id) {
        res.send({
            success: '第二页'
        })
    }
}));

module.exports = router;