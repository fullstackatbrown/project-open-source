const db = require('../models');

// create project
exports.create = (req, res) => {
  const group = {
    name: req.body.name, 
    class_year: req.body.class_year,
    email: req.body.email,
    password: req.body.password,
    image_path: req.body.image_path
  };

  db.Member.create(member)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error occured when creating member.'
      });
    });
};

// get all groups
exports.findAll = (req, res) => {
  db.Member.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error retrieving members.'
      });
    });
};

// login member by id
exports.login = (req, res) => {
  const checkEmail = req.params.email;
  const checkPassword = req.params.password;
  db.Member.login({
      where: { 
          email: checkEmail, 
          password: checkPassword 
        } 
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error logging in member.'
      });
    });
};

// // get group by id
// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   db.Member.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || 'Error retrieving project by id.'
//       });
//     });
// };