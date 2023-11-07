const router = require("express").Router();
const productsController = require("../controllers/products.controller");

router.get("/:id?", productsController.getProduct);


module.exports = router;
