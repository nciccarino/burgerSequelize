var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
  burger_name: {
    type: Sequelize.STRING
  }, 
  devoured: {
    type: Sequelize.BOOLEAN
  }, 
  date: {
    type: Sequelize.DATE
  }
}, {
  timestamps: true
});

Burger.sync(); 

module.exports = Burger;