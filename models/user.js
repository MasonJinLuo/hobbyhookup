module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 15]
            }
        },

        image_path: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt',
            defaultValue: sequelize.literal('NOW()')
        },

        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt',
            defaultValue: sequelize.literal('NOW()')
        },
    }, {
        classMethods: {
            associate: function(models) {

                this.hasMany(models.User2Hobby, {
                    foreignKey: {
                        name: 'user_id',
                        allowNull: true
                    }
                });
            }
        }

    });
    return User;
};
