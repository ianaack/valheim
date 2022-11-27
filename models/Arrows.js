const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Arrows extends Model {}

Arrows.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		arrow_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		materials_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "material",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "arrow",
	}
);

module.exports = Arrows;
