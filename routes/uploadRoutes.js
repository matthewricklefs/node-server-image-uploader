const router = require("express").Router();
//pulling in parser
const multer = require("multer");
//let us grab the path of file coming in or going out
const path = require("path");

//returns function that takes in object, multer takes in value and decides what/where to store data
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

router.post("/upload", (req, res) => {
  const upload = multer({ storage }).single("photo");
  // req.file gives us image
  // req.body gives us the remainding fields
  upload(req, res, (err) => {
    return res.send(`
      Here is your image: <hr /> <img src="${req.file.path}" width="500"> <hr /> <a href="./">Upload Another </a>
    `);
  });
});

//default export
module.exports = router;
