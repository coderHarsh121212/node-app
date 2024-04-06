const express = require("express");
require("dotenv").config()//it is a npm pack to use .env file
const server = express();
const ProductRouter = require("./routes/product");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
main().catch((err) => console.log(err));
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/product", ProductRouter.ProductRouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, process.env.PUBLIC_DIR, "index.html")); //it is basically used to combine path //wildcard technique
}); ///it is bascially a middle to load or find the unfind paths
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}
server.listen("3000", () => {
  console.log("server started");
});
