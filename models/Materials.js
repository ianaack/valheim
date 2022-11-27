const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Materials extends Model {}

Materials.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		material_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "material",
	}
);

module.exports = Materials;
