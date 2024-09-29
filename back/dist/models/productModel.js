"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Asegúrate de que la conexión de Sequelize esté bien configurada
const Product = database_1.default.define("Product", {
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    productCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = Product;
