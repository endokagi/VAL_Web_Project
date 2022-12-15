var express = require("express");
var path = require("path");
var favicon = require('serve-favicon');

var routes = require("./route");
var app = express();

app.set("port",process.env.PORT || 8080);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("assets/img"));
app.use(favicon(__dirname + '/VestALife.ico'));
app.use(routes);

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
})
