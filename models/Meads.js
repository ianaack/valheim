const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Mead extends Model {}

Mead.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		mead_name: {
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
		modelName: "mead",
	}
);

module.exports = Mead;
