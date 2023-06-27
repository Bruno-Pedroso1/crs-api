import ordersController from "../controllers/ordersController"

export default (app) => {
	app.post('/orders/persist', ordersController.persist)
	app.post('/orders/persist/:id', ordersController.persist)
	app.delete('/orders/destroy/:id', ordersController.destroy)
	app.get('/orders', ordersController.get)
	app.get('/orders/:id', ordersController.get)
}