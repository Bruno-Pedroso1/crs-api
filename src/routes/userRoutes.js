import userController from '../controllers/userController'
import adminValidator from '../utils/adminValidator'
import Authenticate from '../utils/Authenticate'
import verifytoken from '../utils/verifyToken'
import email from '../utils/email'

export default (app) => {
  app.get('/user', userController.dualGet)
  app.post('/users/', userController.persist)
  app.get('/users/by-token', userController.getByToken)
  app.post('/users/login', userController.login),
  app.delete('/users/delete/:id', userController.delet)
  app.post('/users/:id', userController.persist)
  app.get('/user/:id',  userController.dualGet)
}