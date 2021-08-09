const db = require('../models');

// create project
exports.create = (req, res) => {
  const project = {
    name: req.body.name, 
    description: req.body.description,
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

exports.getInfo = (req, res) => {
  db.Projects.findOne({ 
    where: { 
      id: parseInt(req.body.project),
    } 
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error retrieving project info.'
      });
    });
};


exports.updateProject = (req, res) => {
  const projectId = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const project_link = req.body.project_link;
  const image_path = req.body.image_path;

  console.log(projectId, name, description, project_link, image_path)
  db.Projects.update({
    name: name,
    description: description,
    project_link: project_link,
    image_path: image_path
  }, {
    where: { id: projectId },
    returning: true,
    plain: true
  })
  .then(data => {
    res.send(true);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Error updating project info.'
    });
  });
};

exports.removeProject = (req, res) => {

  db.Projects.destroy({
    where: {
      id: parseInt(req.body.project),
    }
})
.then(data => {
  res.send(true);
})
.catch(err => {
  res.status(500).send({
    message: err.message || 'Error removing project.'
  });
});
}

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