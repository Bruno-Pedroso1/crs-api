import cupomsController from "../controllers/cupomsController"

export default (app) => {
	app.post('/cupoms/persist', cupomsController.persist)
	app.post('/cupoms/persist/:id', cupomsController.persist)
	app.delete('/cupoms/destroy/:id', cupomsController.destroy)
	app.get('/cupoms', cupomsController.get)
	app.get('/cupoms/:id', cupomsController.get)
}