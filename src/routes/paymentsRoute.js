import paymentsController from "../controllers/paymentsController"

export default (app) => {
	app.post('/payments/persist', paymentsController.persist)
	app.post('/payments/persist/:id', paymentsController.persist)
	app.delete('/payments/destroy/:id', paymentsController.destroy)
	app.get('/payments', paymentsController.get)
	app.get('/payments/:id', paymentsController.get)
}