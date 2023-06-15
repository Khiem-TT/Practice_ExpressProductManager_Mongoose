"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = require("../models/schemas/product.model");
class ProductController {
    static async createProduct(req, res) {
        try {
            const productNew = new product_model_1.Product(req.body);
            const product = await productNew.save();
            if (product) {
                res.render('success');
            }
            else {
                res.render('error');
            }
        }
        catch (err) {
            res.render('error');
        }
    }
    static async getListProduct(req, res) {
        try {
            let page = +req.query.page;
            page = page ? page : 1;
            let limit = 2;
            let offset = Math.ceil((page - 1) * limit);
            const products = await product_model_1.Product.find();
            const productLimit = await product_model_1.Product.find().limit(limit).skip(offset);
            let totalPage = Math.ceil(products.length / limit);
            res.render('listProduct', { productLimit: productLimit, numberPage: totalPage, currentPage: page });
        }
        catch (err) {
            res.render('error');
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map