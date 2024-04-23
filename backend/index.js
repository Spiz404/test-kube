const express = require("express")

const cors = require("cors")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.json("stringa")
})

app.listen(5000, () => {
  console.log("listening on port 4000")
})
