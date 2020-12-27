import { Router } from 'express';
import OrdersController from '../controllers/OdersController';
import orderValidation from '../middleware/validation/orderValidation';
import authorize from '../middleware/authorization';

const router = Router();
const ordersController = new OrdersController();

router.post('/',
  authorize,
  orderValidation.createValidator,
  orderValidation.createValidationResult,
  ordersController.add.bind(OrdersController));
router.get('/', authorize,
  ordersController.all.bind(OrdersController));
router.get('/:id', authorize,
  ordersController.one.bind(OrdersController));
router.put('/:id',
  authorize,
  orderValidation.updateValidator,
  orderValidation.updateValidationResult,
  ordersController.update.bind(OrdersController));
router.delete('/:id',
  authorize,
  ordersController.delete.bind(OrdersController));

export default router;
