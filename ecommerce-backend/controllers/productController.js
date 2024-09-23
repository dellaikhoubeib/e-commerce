// productController.js content goes here 
const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Add a product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
