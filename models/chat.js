module.exports = function(sequelize, DataTypes){
	var Chat = sequelize.define("Chat", {
		from:{
			type: DataTypes.STRING,
			allowNull: false
		},

		to:{
			type: DataTypes.STRING,
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

	});
return Chat;
};