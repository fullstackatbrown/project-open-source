module.exports = (sequelize, DataTypes) => {
    var Member = sequelize.define('Member', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: {
            type: DataTypes.STRING,
            allow_null: false
        }, 
        class_year: {
            type: DataTypes.INTEGER,
            allow_null: false
        },
        email: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        image_path: {
            type: DataTypes.STRING, 
            allowNull: false
        }
        // projects: {
        //     type: DataTypes.ARRAY(DataTypes.INTEGER), 
        //     allowNull: false
        // }

    });

    return Member;
};
