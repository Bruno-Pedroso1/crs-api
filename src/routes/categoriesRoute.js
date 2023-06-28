import categoriesController from "../controllers/categoriesController"

export default (app) => {
	app.post('/categories/', categoriesController.persist)
	app.post('/categories/:id', categoriesController.persist)
	app.delete('/categories/destroy/:id', categoriesController.destroy)
	app.get('/categories', categoriesController.get)
	app.get('/categories/:id', categoriesController.get)
}