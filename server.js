const express = require("express");

//pulling route into express
const uploadRoutes = require("./routes/uploadRoutes");

//create instance of express
const app = express();

//set up port to listen on
//environment variables are ALL CAPS
const port = process.env.PORT || 4000;

//create static reference so app has access to static folder
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
app.use(uploadRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
