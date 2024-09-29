// const { Sequelize } = require("sequelize");
// require('dotenv').config();

// // Configurar conexión a la base de datos PostgreSQL
// const sequelize = new Sequelize("productwhisperingwinds", "rosaura", "admin", {
//   host: "localhost",
//   dialect: "postgres",
//   logging: false, // Deshabilita el log de consultas SQL
// });

// sequelize
//   .authenticate()
//   .then(() => console.log("Conectado a la base de datos PostgreSQL"))
//   .catch((err: unknown) =>
//     console.error("Error conectando a PostgreSQL:", err)
//   );

// export default sequelize;
require("dotenv").config();
const { Sequelize } = require("sequelize");
// Al principio del archivo

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false, // Deshabilita el log de consultas SQL
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Conectado a la base de datos PostgreSQL"))
  .catch((err: unknown) =>
    console.error("Error conectando a PostgreSQL:", err)
  );

export default sequelize;
