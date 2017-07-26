module.exports = function(sequelize, DataTypes){
	var Hobby = sequelize.define("Hobby", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hobby_url: {
			type: DataTypes.STRING,
			allowNull: false
		},
		hobby_image: {
			type: DataTypes.STRING,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			field: "createdAt",
			defaultValue: sequelize.literal('NOW()')
		},
		updatedAt:{
			type: DataTypes.DATE,
			field: 'updatedAt',
			defaultValue: sequelize.literal('NOW()')
		}
	},{
		classMethods: {
			associate: function(models){
				this.hasMany(models.User2Hobby, {
					foreignKey: {
						name: 'hobby_id',
						allowNull: false
					}
				});
			}
		}
	});
	return Hobby;
};