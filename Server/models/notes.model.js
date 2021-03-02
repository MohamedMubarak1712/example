const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define("note", {
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  
  });
  return Note;
};