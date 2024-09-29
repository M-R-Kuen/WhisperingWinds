const { Sequelize } = require("sequelize");

// Configurar conexión a la base de datos PostgreSQL
const sequelize = new Sequelize("productwhisperingwinds", "rosaura", "admin", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // Deshabilita el log de consultas SQL
});

sequelize
  .authenticate()
  .then(() => console.log("Conectado a la base de datos PostgreSQL"))
  .catch((err: unknown) =>
    console.error("Error conectando a PostgreSQL:", err)
  );

export default sequelize;
