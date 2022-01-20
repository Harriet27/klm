const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

router.get('/', productController.listAllProducts);
router.get('/:id', productController.findProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.deleteProductById);
 
module.exports = router;
