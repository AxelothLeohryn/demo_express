const express = require("express");
const app = express();
const port = 3000;

const booksRoutes = require("./routes/books.routes");
const productsApiRoutes = require("./routes/productsApi.routes");
const productsRoutes = require('./routes/products.routes');

app.use(express.json()); // Habilito recepción de JSON en servidor

//Configuracion motor plantilla PUG
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/first_template', function(req, res){
  res.render('first_view');
});
app.get('/dynamic_view', function(req, res){
  res.render('dynamic', {
     name: "hola", 
     url:"http://www.thebridge.tech"
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rutas
//API
app.use("/api/books", booksRoutes);
app.use("/api/products", productsApiRoutes);
//Web
app.use('/products', productsRoutes);

// Última ruta por defecto. En caso de no encotrarse ninguna anterior, devolvemos un 404
// Para rutas no existentes
app.get("*", (req, res) => {
  res.status(404).send("Gatito triste - 404 not found");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
