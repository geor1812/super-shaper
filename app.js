const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

const server = app.listen(8080, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server running on port 8080", server.address().port);
});