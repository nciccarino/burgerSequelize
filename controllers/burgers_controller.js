var express = require("express");

var router = express.Router();

var Burger = require("../models/burger.js");

router.get("/", function(req, res) {
  Burger.findAll({}).then(function(data) {
    // res.json(data); 
    res.render("index", data); 
  }); 
});

router.post("/", function(req, res) {
  Burger.create({
    burger_name: req.body.name,
    devoured: req.body.devoured
  }).then(function(data) {
    //res.json(data); 
    res.redirect("/"); 
  }); 
});

router.put("/:id", function(req, res) {
  Burger.update({
    burger_name: req.body.name,
    devoured: req.body.devoured
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(data) {
    //res.json(data); 
    res.redirect("/");
  })
});

router.delete("/:id", function(req, res) {
  Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    //res.json(data); 
    res.redirect("/");
  }); 
});

module.exports = router;