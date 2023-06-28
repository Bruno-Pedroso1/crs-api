import userController from "../controllers/userController"

export default (app) => {
	app.post('/user/', userController.persist)
	app.patch('/user/:id', userController.persist)
	app.delete('/user/destroy/:id', userController.destroy)
	app.get('/user', userController.get)
	app.get('/user/:id', userController.get)
}