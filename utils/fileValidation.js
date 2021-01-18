const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = "Only image files are allowed!";

    return cb(new Error(req.fileValidationError), false);
  }

  cb(null, true);
};

module.exports = fileFilter;
