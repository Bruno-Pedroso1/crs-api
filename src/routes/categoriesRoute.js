import categoriesController from "../controllers/categoriesController"
import adminValidator from "../utils/adminValidator"
import Authenticate from "../utils/Authenticate"


export default (app) => {
  app.delete('/category/destroy/:id',categoriesController.delet)
  app.get('/category', categoriesController.getAll)
  app.get('/category/get-all-categories', categoriesController.getAllCategories)
  app.post('/category',categoriesController.persist)
  app.get('/category/:id', categoriesController.getById)
  app.patch('/category/:id', categoriesController.persist)
}