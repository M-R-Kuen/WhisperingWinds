import express from "express";
import sequelize from "./config/database"; // Importar la conexión a la base de datos
import Product from "./models/productModel"; // Importar el modelo
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());

// Ruta de prueba para registrar productos
app.post("/register-product", async (req, res) => {
  const { email, name, productCode } = req.body;

  try {
    const newProduct = await Product.create({ email, name, productCode });
    res.status(201).send("Succesfully registered product");
  } catch (error) {
    res.status(400).send("Please revise your details");
  }
});

// Sincronizar la base de datos y los modelos
sequelize
  .sync({ force: false }) // Cambia a true si quieres forzar la recreación de tablas (¡esto eliminará los datos!)
  .then(() => {
    console.log("Base de datos sincronizada");
    // Inicia el servidor solo después de que las tablas estén sincronizadas
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error al sincronizar la base de datos:", err);
  });
