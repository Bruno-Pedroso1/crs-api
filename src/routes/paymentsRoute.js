import paymentsController from "../controllers/paymentsController"
import adminValidator from "../utils/adminValidator"
import Authenticate from "../utils/Authenticate"

export default (app) => {
	app.post('/payments/', Authenticate, adminValidator, paymentsController.persist)
	app.patch('/payments/:id', Authenticate, adminValidator, paymentsController.persist)
	app.delete('/payments/destroy/:id',Authenticate, adminValidator, paymentsController.destroy)
	app.get('/payments', paymentsController.get)
	app.get('/payments/:id', paymentsController.get)
}