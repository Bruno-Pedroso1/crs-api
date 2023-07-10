import paymentsController from "../controllers/paymentsController"
import adminValidator from "../utils/adminValidator"
import Authenticate from "../utils/Authenticate"

export default (app) => {
	app.post('/payments/', paymentsController.persist)
	app.patch('/payments/:id', paymentsController.persist)
	app.delete('/payments/destroy/:id', paymentsController.destroy)
	app.get('/payments', paymentsController.get)
	app.get('/payments/:id', paymentsController.get)
}