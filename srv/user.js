const express = require("express");

let router = express.Router();

router.get('/getName', (req, res, next) => {
    res.json({
        userData: [
            {age: 18, name: "李明"}
        ]
    })
});

module.exports = router;