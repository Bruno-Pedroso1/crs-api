import paymentsController from "../controllers/paymentsController"

export default (app) => {
	app.post('/payments/', paymentsController.persist)
	app.post('/payments/:id', paymentsController.persist)
	app.delete('/payments/destroy/:id', paymentsController.destroy)
	app.get('/payments', paymentsController.get)
	app.get('/payments/:id', paymentsController.get)
}