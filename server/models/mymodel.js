module.exports = (sequelize, DataTypes) => {
    var Test = sequelize.define('test', {
        column: DataTypes.STRING
    });

    return Test;
};
