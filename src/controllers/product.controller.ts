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
            let page = +req.query.page;
            page = page ? page : 1;
            let limit = 2;
            let offset = Math.ceil((page - 1) * limit);
            const products = await Product.find()
            const productLimit = await Product.find().limit(limit).skip(offset);
            let totalPage = Math.ceil(products.length / limit);
            res.render('listProduct', {productLimit: productLimit, numberPage: totalPage, currentPage: page});
        } catch (err) {
            res.render('error');
        }
    }
}