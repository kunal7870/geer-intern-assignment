// server.js
import express from 'express';
import cors from 'cors';
import { products } from './data.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// making mutable copy
let productList = [...products];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(productList);
});

// POST add product
app.post('/api/products', (req, res) => {
  const { name, price, imageUrl } = req.body;
  const id = Date.now();
  const newProduct = { id, name, price, imageUrl };
  productList.push(newProduct);
  res.status(201).json(newProduct);
});

// to DELETE a product
app.delete('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const prevLength = productList.length;
    productList = productList.filter(product => product.id.toString() !== id.toString());
    const newLength = productList.length;
  
    if (prevLength === newLength) {
      return res.status(404).json({ message: "Product not found" });
    }
  
    res.status(200).json({ message: "Product deleted" });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
