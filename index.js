const express = require("express");
const path = require("path");

const port = 3000;

const app = express();


app.use(express.static(path.join(__dirname, './public')));
// app.use('/images', express.static(path.join(__dirname, '../Frontend/public/images')));
// app.use('/css', express.static(path.join(__dirname, '../Frontend/public/css')));


app.get("/", (req, res) => {
  res.sendFile("index.html")
});


app.listen(port, () => {
  console.log(`The app is running on port ${port}`)
});

