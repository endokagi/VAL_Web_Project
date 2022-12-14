var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    res.render("index");
});

router.get("/game", function(req,res){
    res.render("game");
});

router.get("/blockchain", function(req,res){
    res.render("blockchain");
});

router.get("/", function(req,res){
    res.render("index");
});

module.exports = router;