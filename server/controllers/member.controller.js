const db = require('../models');

// create project
exports.create = (req, res) => {
  const member = {
    name: req.body.name, 
    class_year: req.body.year,
    email: req.body.email,
    password: req.body.password,
    image_path: "https://smhlancers.org/wp-content/uploads/2016/06/profile-placeholder-300x300.png",
    bio: req.body.bio
  };

  db.Member.create(member)
    .then(data => {
      console.log(data)
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
  db.Member.findAll({attributes: {exclude: ['password','createdAt','updatedAt']}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error retrieving members.'
      });
    });
};

exports.findCollaborators = (req, res) => {
  const checkProjectId = req.body.project;
  db.Member.findAll(
    {
      attributes: {
        exclude: ['password','createdAt','updatedAt']
      },
      where: { 
        project_id: checkProjectId,
      } 
    })
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

exports.emailExists = (req, res) => {
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
        message: err.message || 'Error member does not exist.'
      });
    });
};

exports.updateProject = (req, res) => {
  const memberId = req.body.memberId;
  const projectId = req.body.projectId;

  db.Member.update({
    project_id: projectId
  }, {
    where: { id: memberId },
    returning: true,
    plain: true
  })
  .then(data => {
    res.send(true);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'Error updating project of member.'
    });
  });
};

exports.isAdmin = (req, res) => {
  const checkEmail = req.body.email;
  const checkPassword = req.body.password;
  db.Member.findOne(
    {
    //find member based on email, retrieve password based on email, check if equal
    //data is that user w/ email
      where: { 
          email: checkEmail,
          password: checkPassword 
        } 
    })
    .then(data => {
      console.log("FOUND!")
      console.log(data.dataValues.admin)
      // console.log(data.dataValues.admin)
      res.send(data.dataValues.admin);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Error logging in member.'
      });
    });
};
