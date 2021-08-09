module.exports = (sequelize, DataTypes) => {
    var Projects = sequelize.define('Projects', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      name: {
        type: DataTypes.STRING, 
        allowNull: false
      }, 
      description: {
        type: DataTypes.STRING, 
        allowNull: false
      }, 
      project_link: {
        type: DataTypes.STRING, 
        allowNull: false
      },
      image_path: {
        type: DataTypes.STRING, 
        allowNull: false
      }
    });
  
    // Projects.associate = function(models) {
    //   Projects.hasMany(models.Members, {foreignKey: 'id'});
    // };
  
    return Projects;
  };