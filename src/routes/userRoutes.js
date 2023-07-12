import userController from '../controllers/userController'
import adminValidator from '../utils/adminValidator'
import Authenticate from '../utils/Authenticate'
import verifytoken from '../utils/verifyToken'
import email from '../utils/email'

export default (app) => {
  app.get('/user', userController.getAll)
  app.get('/users/by-token', userController.getByToken)
  app.get('/user/:id',  userController.dualGet)
  app.post('/users/', userController.persist)
  app.post('/users/login', userController.login),
	app.post('/users/verify-token', verifytoken)
  app.patch('/users/:id', userController.persist)
	app.delete('/users/delete/:id', userController.delet)
}