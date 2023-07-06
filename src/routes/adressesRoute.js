import adressesController from "../controllers/adressesController"
import Authenticate from "../utils/Authenticate"

export default (app) => {
	app.post('/adresses/', Authenticate, adressesController.persist)
	app.patch('/adresses/:id', Authenticate, adressesController.persist)
	app.delete('/adresses/destroy/:id', Authenticate, adressesController.destroy)
	app.get('/adresses', Authenticate, adressesController.get)
	app.get('/adresses/:id', Authenticate, adressesController.get)
}