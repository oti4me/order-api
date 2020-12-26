import { Router } from 'express';
import { OrdersController } from '../controllers/OdersController'
import { orderValidation } from '../middleware/validation/orderValidation'
const router = Router();
const ordersController = new OrdersController();

router.post('/',
  orderValidation.createValidator,
  orderValidation.createValidationResult,
  ordersController.add.bind(OrdersController))
router.get('/', ordersController.all.bind(OrdersController))

export default router;
