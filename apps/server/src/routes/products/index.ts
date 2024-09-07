import express, { Express } from "express";
import { ProductController } from "../../controllers/productController"
// import { ProductsService } from "../../services/ProductsService"

export function productsRoute(app: Express): void {
    const router = express.Router()
    const productController = new ProductController()
    // const service = new ProductsService();

    // The main route
    app.use('/api/products', router)
    
    // Child routes

    router.get('/', productController.getAllProducts); // Get all productos
    router.get('/:id', productController.getProductById); // Get product by Id
    router.post('/', productController.createProduct); // Create a new product
    router.put('/:id', productController.updateProduct); // Update a product by Id
    router.delete('/:id', productController.deleteProduct); // Delete a product by Id


    // ----------------------------------------------------------------------------------------------
    // get made by laserants instructor:
    /* 
    router.get('/', async function (_req, res, next) {

        try {
            const result = await service.getProducts()          
            return res.json({ result })            
        } catch (e) {
            next(e)
        }
    }) 
    */
}
    