import ordersController from "../controllers/ordersController"
import Authenticate from "../utils/Authenticate"
import adminValidator from "../utils/adminValidator"

export default (app) => {
	app.post('/orders', ordersController.persist)
	app.patch('/orders/:id', ordersController.persist)
	app.delete('/orders/destroy/:id', ordersController.destroy)
	app.get('/orders',ordersController.get)
	app.get('/orders/:id', ordersController.get)
}