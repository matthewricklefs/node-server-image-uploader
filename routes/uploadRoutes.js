const router = require("express").Router();
//pulling in parser
const multer = require("multer");
//let us grab the path of file coming in or going out
const path = require("path");

const fileFilter = require("../utils/fileValidation")

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
  const upload = multer({ storage, fileFilter }).single("photo");
  // req.file gives us image
  // req.body gives us the remainding fields
  upload(req, res, (err) => {
    if (req.fileValidationError) {
      return res.send(req.fileValidationError);
    } else if (!req.file) {
      return res.send("No Image Selected: <hr /> <a href='./'> Go Back </a>");
    } else if (err) {
      return res.send(err);
    }

    return res.send(`
      Here is your image: <hr /> <img src="${req.file.path}" width="500"> <hr /> <a href="./">Upload Another </a>
    `);
  });
});

//default export
module.exports = router;
