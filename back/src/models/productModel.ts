import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";
import sequelize from "../config/database"; // Asegúrate de que la conexión de Sequelize esté bien configurada

const Product = sequelize.define("Product", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Product;
