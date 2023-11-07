const fetchProduct = require("../utils/fetchProduct.js");


//READ
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    let products = await fetchProduct.getProduct(id);
    res.status(200).render('products', products); // Respuesta de la API para 1 producto
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};


module.exports = {
  getProduct
};
