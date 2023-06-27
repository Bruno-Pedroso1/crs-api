import productsController from "../controllers/productsController"

export default (app) => {
	app.post('/products/criar', productsController.persist)
	app.patch('/products/editar/:id', productsController.persist)
	app.delete('/products/destroy/:id', productsController.destroy)
	app.get('/products', productsController.get)
	app.get('/products/:id', productsController.get)
}