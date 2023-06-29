import ordersProductsController from "../controllers/ordersProductsController"

export default (app) => {
	app.post('/order-products/', ordersProductsController.persist)
	app.patch('/order-products/:id', ordersProductsController.persist)
	app.delete('/order-products/destroy/:id', ordersProductsController.destroy)
	app.get('/order-products', ordersProductsController.get)
	app.get('/order-products/:id', ordersProductsController.get)
}