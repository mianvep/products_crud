const router = require("express").Router();

const prodServices = require("./products.services");

router.get("/", prodServices.getAllTheProducts);
router.post("/", prodServices.creatingProduct);

router.get("/:id", prodServices.getTheProductById);
router.delete("/:id", prodServices.removeProduct);
router.patch("/:id", prodServices.patchProduct);

module.exports = router;
