"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database")); // Importar la conexión a la base de datos
const productModel_1 = __importDefault(require("./models/productModel")); // Importar el modelo
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3000;
app.use(express_1.default.json());
// Ruta de prueba para registrar productos
app.post("/register-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, productCode } = req.body;
    try {
        const newProduct = yield productModel_1.default.create({ email, name, productCode });
        res.status(201).send("Succesfully registered product");
    }
    catch (error) {
        res.status(400).send("Please revise your details");
    }
}));
// Sincronizar la base de datos y los modelos
database_1.default
    .sync({ force: false }) // Cambia a true si quieres forzar la recreación de tablas (¡esto eliminará los datos!)
    .then(() => {
    console.log("Base de datos sincronizada");
    // Inicia el servidor solo después de que las tablas estén sincronizadas
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
})
    .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
});
