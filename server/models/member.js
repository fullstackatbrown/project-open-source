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
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING, 
            allowNull: false,
            validate: {
                len: [0,60]
            }
        },
        image_path: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Projects',
                key: 'id',
             }
        }, 
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }, 
    });

    return Member;
};
