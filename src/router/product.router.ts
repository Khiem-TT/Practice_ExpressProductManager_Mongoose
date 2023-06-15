import {Router} from "express";

const productRouter = Router();
import multer from "multer";
import {ProductController} from "../controllers/product.controller";

const upload = multer();

productRouter.get('/create', (req, res) => {
    res.render('createProduct');
});
productRouter.post('/create', upload.none(), ProductController.createProduct);
productRouter.get('/list', ProductController.getListProduct);

export default productRouter;