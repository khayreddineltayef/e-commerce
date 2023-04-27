const Cart = require("../models/Cart");

//CREATE

// exports.addCart = async (req, res) => {
//   const newCart = new Cart(req.body);

//   try {
//     const savedCart = await newCart.save();
//     res.status(200).json(savedCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
let carts = [];

exports.addCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    carts.push(savedCart);
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllCarts = async (req, res) => {
  try {
    const allCarts = await Cart.find();
    carts = allCarts;
    res.status(200).json(allCarts);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCartById = async (req, res) => {
  const id = req.params.id;

  try {
    const cart = await Cart.findById(id);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateCart = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedCart = await Cart.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const index = carts.findIndex((cart) => cart._id.toString() === id);
    carts[index] = updatedCart;
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteCart = async (req, res) => {
  const id = req.params.id;

  try {
    await Cart.findByIdAndDelete(id);
    carts = carts.filter((cart) => cart._id.toString() !== id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getAllCarts = async (req, res) => {
  const userId = req.params.userId;

  try {
    const carts = await Cart.find({ userId: userId });
    res.send(carts);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Internal server error" });
  }
};
