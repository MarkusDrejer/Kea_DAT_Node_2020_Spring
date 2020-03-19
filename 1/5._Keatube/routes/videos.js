const router = require("express").Router();

const videos = [];

router.get("/test", (req, res) => {
    return res.send({message: "Does the router work?"});
});

module.exports = router;