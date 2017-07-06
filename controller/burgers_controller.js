var express = require("express");
var router = express.Router(); 
var db = require("../models");

module.exports = function(router) {

  router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {

      res.render("index", data); 
    }); 
  });

  router.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.name,
      devoured: req.body.devoured
    }).then(function(data) {

      res.redirect("/"); 
    }); 
  });

  router.put("/:id", function(req, res) {
    db.Burger.update({
      burger_name: req.body.name,
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(data) {

      res.redirect("/");
    })
  });

  router.delete("/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data) {

      res.redirect("/");
    }); 
  });

}; //end