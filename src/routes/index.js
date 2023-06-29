import adressesRoute from './adressesRoute'
import categoriesRoute from './categoriesRoute'
import cupomsRoute from './cupomsRoute';
import ordersProductsRoute from './orderProductsRoute'
import ordersRoute from './ordersRoute'
import paymentsRoute from './paymentsRoute'
import productsRoute from './productsRoute'
import userRoutes from './userRoutes'

export default function Routes (app) {
    ordersProductsRoute(app);
    adressesRoute(app);
    categoriesRoute(app);
    cupomsRoute(app);
    ordersRoute(app);
    paymentsRoute(app);
    productsRoute(app);
    userRoutes(app);
}
