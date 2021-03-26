const db = require('../models');

// create project
exports.create = (req, res) => {
  const group = {
    name: req.body.name, 
    description: req.body.description,
    members: req.body.members,
    project_link: req.body.project_link,
    image_path: req.body.image_path
  };

  db.Projects.create(project)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error occured when creating project.'
      });
    });
};

// get all groups
exports.findAll = (req, res) => {
  db.Projects.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error retrieving project.'
      });
    });
};

// // get group by id
// exports.findOne = (req, res) => {
//   const id = req.params.id;
//   db.Projects.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || 'Error retrieving project by id.'
//       });
//     });
// };