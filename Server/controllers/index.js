const db = require("../models");
const Notes = db.notes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log("resss==>", req)

  if (!req.body.email) {
    
    res.status(400).send({
      message: "Content can not be empty !",
    });
    console.log(req.body.email)
    return;
    
  }

  const note = {
    email: req.body.email,
    password: req.body.password,

  };

  Notes.create(note)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the data",
      });
    });
};

exports.findAll = (req, res) => {
  const Name = req.query.email;

  Notes.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving data",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Notes.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Notes with id=" + id,
      });
    });
};




