const product = require("../Modules/ProductSchema");
const realProducts = product.Products;

exports.addProducts = async (req, res) => {
  const product = new realProducts(req.body);
  await product.save();
  res.json(product);
};
exports.getProduct = async (req, res) => {
  let idx = req.params.id;
  let a = await realProducts.findById(idx);
  res.json(a);
};
exports.getProducts = async (req, res) => {
  let a = await realProducts.find();
  res.json(a);
};
exports.updateProduct = async (req, res) => {
  let idx = req.params.id;
  let a = await realProducts.findByIdAndUpdate(idx, req.body);
  res.json(a);
};
exports.deleteProduct = async (req, res) => {
  let idx = req.params.id;
  let a = await realProducts.findByIdAndDelete(idx);
  res.json(a);
};
