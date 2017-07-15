module.exports = function(sequelize, DataTypes){
	var User2Hobby = sequelize.define("User2Hobby", {
        level: {
            type: DataTypes.STRING,
            defaultValue: "Novice",
            allowNull: false
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
        }
	},{
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Hobby, {
                    foreignKey: {
                        name: 'hobby_id',
                        allowNull: true
                    }
                });

                this.belongsTo(models.User, {
                    foreignKey: {
                        name: 'user_id',
                        allowNull: true
                    }
                });
            }
        }
    });
	return User2Hobby;
};