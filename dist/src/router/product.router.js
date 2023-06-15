"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
const multer_1 = __importDefault(require("multer"));
const product_controller_1 = require("../controllers/product.controller");
const upload = (0, multer_1.default)();
productRouter.get('/create', (req, res) => {
    res.render('createProduct');
});
productRouter.post('/create', upload.none(), product_controller_1.ProductController.createProduct);
productRouter.get('/list', product_controller_1.ProductController.getListProduct);
exports.default = productRouter;
//# sourceMappingURL=product.router.js.map