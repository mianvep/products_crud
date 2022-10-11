const { DataTypes } = require("sequelize");
const db = require("../tools/database");

const Products = db.define("products", {
	id: {
		primaryKey: true,
		type: DataTypes.UUID,
		allowNull: false,
		field: "id",
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		field: "name",
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false,
		field: "category",
	},
	price: {
		type: DataTypes.STRING,
		allowNull: false,
		field: "price",
	},
	isAvailable: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		field: "stock",
	},
});

module.exports = Products;
