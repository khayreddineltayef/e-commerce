const express = require("express");
const { verifiyAuth } = require("../middlewares/verifiyToken");
const {
  addCart,
  getAllCarts,
  updateCart,
} = require("../controllers/cart.controller");
const router = express.Router();
router.post("/add", addCart);
router.get("/:userId", getAllCarts);
router.put("/:id", updateCart);

module.exports = router;
