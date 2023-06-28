import ordersController from "../controllers/ordersController"

export default (app) => {
	app.post('/orders', ordersController.persist)
	app.post('/orders/:id', ordersController.persist)
	app.delete('/orders/destroy/:id', ordersController.destroy)
	app.get('/orders', ordersController.get)
	app.get('/orders/:id', ordersController.get)
}