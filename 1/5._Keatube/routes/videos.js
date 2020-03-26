const router = require("express").Router();

const crypto = require("crypto");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    filename: (req, file, cb) => {
        const fileName = crypto.randomBytes(20).toString("hex");
        const mimetypeArray = file.mimetype.split("/");
        const extension = "." + mimetypeArray.pop();
        cb(null, fileName + extension);
    }
});
const upload = multer({storage: storage});

const videos = [{
    title: "Ocean Waves",
    description: "Watch the waves and enjoy",
    fileName: "3c53ecff-e4f7-4ad5-a876-88e4aa98914e.mp4",
    thumbnail: "",
    category: "Nature",
    tags: ["waves", "ocean", "coast"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
},
{
    title: "Spin me right round",
    description: "Oh, how the turntables",
    fileName: "1444f856-cd16-49ea-9044-fcf2994261ca.mp4",
    thumbnail: "",
    category: "Artistic",
    tags: ["spin", "music", "artist"],
    uploadDate: new Date(2020, 3, 26, 10, 30)
}];

// for(i = 0; i < 100; i++) {
//     videos.push({
//         id: i+2,
//         filename: "test" + i,
//         title: "hello" + i
//     });
// }

const videosPerPage = 10;

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page-1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({response: videos.slice(start, end)});
});

router.get("/videos/:videoId", (req, res) => {
    return res.send({response: videos.find(video => video.fileName === req.params.videoId)});
});

router.post("/videos", upload.single("video"), (req, res) => {
    console.log(req.file)
    return res.redirect("/");
});

module.exports = router;