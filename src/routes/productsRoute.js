import productsController from "../controllers/productsController"
import Authenticate from "../utils/Authenticate"
import adminValidator from "../utils/adminValidator"

export default (app) => {
	app.post('/products',productsController.persist)
	app.patch('/products/:id', productsController.persist)
	app.delete('/products/destroy/:id',productsController.destroy)
	app.get('/products', productsController.get)
	app.get('/products/:id', productsController.get)
}