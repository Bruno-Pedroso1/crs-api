import userController from "../controllers/userController"
import Authenticate from "../utils/Authenticate"
import adminValidator from "../utils/adminValidator"

export default (app) => {
	app.post('/user/', userController.persist)
	app.patch('/user/:id', userController.persist)
	app.delete('/user/destroy/:id', Authenticate, adminValidator, userController.destroy)
	app.get('/user',userController.get)
	app.get('/user/:id', userController.get)
}