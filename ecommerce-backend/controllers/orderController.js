// orderController.js content goes here 
const Order = require('../models/Order');

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Create an order
exports.createOrder = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const newOrder = new Order({ userId, productId, quantity });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
