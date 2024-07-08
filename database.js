// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/')
//     .then(()=> console.log('Connected to MongoDB...'))
//     .catch(err => console.error('Could not connect to MongoDB...', err));

//     const productSchema = new mongoose.Schema({
//         product_name: {
//           type: String,
//           required: true,
//         },
//         product_price: {
//           type: String,
//           required: true,
//         },
//         isInStock: {
//           type: Boolean,
//           required: true,
//         },
//         category: {
//           type: String,
//           required: true,
//         },
//       });
      
//       const productModel = mongoose.model("products", productSchema);
      
//       // Create
      
//       app.post("/api/products", async (req, res) => {
//         const product = productModel.create({
//           product_name: req.body.product_name,
//           product_price: req.body.product_price,
//           isInStock: req.body.isInStock,
//           category: req.body.category,
//         });
      
//         console.log(product);
      
//         return res.status(201).json({ message: "Product Created" });
//       });

// app.listen(3000, ()=> console.log('Listening on port 3000...'));




