import adressesController from "../controllers/adressesController"

export default (app) => {
	app.post('/adresses/persist', adressesController.persist)
	app.post('/adresses/persist/:id', adressesController.persist)
	app.delete('/adresses/destroy/:id', adressesController.destroy)
	app.get('/adresses', adressesController.get)
	app.get('/adresses/:id', adressesController.get)
}