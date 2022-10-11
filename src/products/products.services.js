const prodControllers = require("./products.controllers");

const getAllTheProducts = (req, res) => {
	prodControllers
		.getAllProducts()
		.then((data) => res.status(200).json(data))
		.catch((err) => res.status(400).json({ msg: err.msg }));
};

const getTheProductById = (req, res) => {
	const id = req.params.id;
	prodControllers
		.getProductById(id)
		.then((data) => {
			if (data) {
				res.status(200).json(data);
			} else {
				res.status(400).json({ msg: "Ivalid id" });
			}
		})
		.catch((err) => res.status(400).json({ msg: err.msg }));
};

const creatingProduct = (req, res) => {
	const data = req.body;
	if (data.name && data.category && data.price && data.isAvailable) {
		prodControllers
			.createProduct(data)
			.then((response) => res.status(201).json(response))
			.catch((err) => res.status(400).json({ msg: err.msg }));
	} else {
		res.status(400).json({ msg: "Missing data" });
	}
};

const patchProduct = (req, res) => {
	const id = req.params.id;
	const { name, category, price, isAvailable } = req.body;
	prodControllers
		.editProduct(id, { name, category, price, isAvailable })
		.then((response) => {
			if (response[0]) {
				res
					.status(200)
					.json({ msg: `Product with id: ${id} was idited succesfull` });
			} else {
				res.status(400).json({ msg: "Invalid id" });
			}
		})
		.catch((err) => res.status(400).json({ msg: err.msg }));
};

const removeProduct = (req, res) => {
	const id = req.params.id;
	prodControllers
		.deleteProduct(id)
		.then((response) => {
			if (response) {
				res.status(204).json(response);
			} else {
				res.status(400).json({ msg: "Invalid id" });
			}
		})
		.catch((err) => res.status(400).json(err));
};

module.exports = {
	getAllTheProducts,
	getTheProductById,
	creatingProduct,
	patchProduct,
	removeProduct,
};
