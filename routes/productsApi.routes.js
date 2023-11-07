const router = require("express").Router();
const productsApiController = require("../controllers/productsApi.controller");

router.get("/:id?", productsApiController.getProduct);
router.post("/", productsApiController.createProduct);
router.put("/", productsApiController.updateProduct);
router.delete("/", productsApiController.deleteProduct);

module.exports = router;
