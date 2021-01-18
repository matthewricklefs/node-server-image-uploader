const express = require("express")

//create instance of express
const app = express()

//set up port to listen on
//environment variables are ALL CAPS
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

