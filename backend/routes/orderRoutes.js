import express from "express";
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);
router.post("/", addOrderItems);

router.get('/:id', getOrderById)

router.put('/:id/pay', updateOrderToPaid)

router.get('/myorders', getMyOrders)

export default router;
