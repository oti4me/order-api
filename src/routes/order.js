import { Router } from 'express';
import { OrdersController } from '../controllers/OdersController'

const router = Router();
const ordersController = new OrdersController();

router.get('/', ordersController.all.bind(OrdersController))

export default router;
