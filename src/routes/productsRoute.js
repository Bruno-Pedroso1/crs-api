import productsController from "../controllers/productsController"
import Authenticate from "../utils/Authenticate"
import adminValidator from "../utils/adminValidator"

export default (app) => {
	app.post('/products', Authenticate, adminValidator, productsController.persist)
	app.patch('/products/:id', Authenticate, adminValidator, productsController.persist)
	app.delete('/products/destroy/:id', Authenticate, adminValidator, productsController.destroy)
	app.get('/products', productsController.get)
	app.get('/products/:id', productsController.get)
}