const express = require("express");
const { port } = require("./config");
const initModels = require("./models/initModels");
const db = require("./tools/database");
const productsRouter = require("./products/products.router");

const app = express();
app.use(express.json());

db.authenticate()
	.then(() => console.log("DB Authentication succesfully"))
	.catch((err) => console.log(err));

db.sync()
	.then(() => console.log("DB sync succesfully"))
	.catch((err) => console.log(err));

initModels();

app.use("/products", productsRouter);

app.get("/", (req, res) => {
	res.status(200).json({ msg: "server ok" });
});

app.listen(port, () => {
	console.log(`Server started in http://localhost:${port}`);
});
