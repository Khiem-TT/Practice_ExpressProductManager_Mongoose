import {Product} from "../models/schemas/product.model";

export class ProductController {
    static async createProduct(req, res) {
        try {
            const productNew = new Product(req.body);
            const product = await productNew.save();
            if (product) {
                res.render('success');
            } else {
                res.render('error');
            }
        } catch (err) {
            res.render('error');
        }
    }

    static async getListProduct(req, res) {
        try {
            const products = await Product.find();
            res.render('listProduct', {products: products});
        } catch (err) {
            res.render('error');
        }
    }
}