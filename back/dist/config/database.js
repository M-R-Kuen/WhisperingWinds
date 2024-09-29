"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    .catch((err) => console.error("Error conectando a PostgreSQL:", err));
exports.default = sequelize;
