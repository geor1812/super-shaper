const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");

app.use(express.static(__dirname + "/public"));
app.use(fileUpload());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/upload", (req, res) => {
    if(req.files) {
        image = req.files.bgImg;
        console.log(image);

        image.mv(`./public/uploads/${image.name}`, (error) => {
            if (error) {
                console.log(error);
            } else {
                res.end();
            }
        });
    }
});

const server = app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server running on port", server.address().port);
});