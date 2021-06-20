const db = require('../models');

// create project
exports.create = (req, res) => {
  const member = {
    name: req.body.name, 
    class_year: req.body.year,
    email: req.body.email,
    password: req.body.password,
    image_path: "test.png"
  };

  db.Member.create(member)
    .then(data => {
        res.send(data._options.isNewRecord)
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
  const checkEmail = req.body.email;
  const checkPassword = req.body.password;
  db.Member.findAll(
    {
    //find member based on email, retrieve password based on email, check if equal
    //data is that user w/ email
      where: { 
          email: checkEmail,
          password: checkPassword 
        } 
    })
    .then(data => {
      console.log(data)
      if (data.length > 0) {
        res.send(true);
      } else {
        res.send(false);
      }
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