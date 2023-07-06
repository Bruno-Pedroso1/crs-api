import cupomsController from "../controllers/cupomsController"
import Authenticate from "../utils/Authenticate"
import adminValidator from "../utils/adminValidator"

export default (app) => {
	app.post('/cupoms', Authenticate, adminValidator, cupomsController.persist)
	app.patch('/cupoms/:id', Authenticate, adminValidator, cupomsController.persist)
	app.delete('/cupoms/destroy/:id', Authenticate, adminValidator, cupomsController.destroy)
	app.get('/cupoms', Authenticate, adminValidator, cupomsController.get)
	app.get('/cupoms/:id', Authenticate, adminValidator, cupomsController.get)
}