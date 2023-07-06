import ordersController from "../controllers/ordersController"
import Authenticate from "../utils/Authenticate"
import adminValidator from "../utils/adminValidator"

export default (app) => {
	app.post('/orders', Authenticate, ordersController.persist)
	app.patch('/orders/:id', Authenticate, ordersController.persist)
	app.delete('/orders/destroy/:id', ordersController.destroy)
	app.get('/orders', Authenticate, adminValidator, ordersController.get)
	app.get('/orders/:id', Authenticate, adminValidator, ordersController.get)
}