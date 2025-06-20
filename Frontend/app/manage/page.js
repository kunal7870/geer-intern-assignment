'use client';

import { useEffect, useState } from 'react';

export default function ManagePage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', imageUrl: '' });

  // function to fetch products from backend
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // adding new product
  const handleAdd = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: '', price: '', imageUrl: '' });
      fetchProducts();
    }
  };

  // functn to delete product
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    });

    // refresh after deletion
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-400 p-6">
      <div className="max-w-5xl mx-auto">
      
        <h1 className="text-3xl font-extrabold text-black mb-6">Manage Products</h1>

        {/* add product form */}
        <form onSubmit={handleAdd} className="mb-10 bg-white p-6 rounded-xl shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            required
          />
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition">
            Add Product
          </button>
        </form>

    
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Existing Products</h2>

        {/* products */}
        <div className="flex flex-wrap gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="flex flex-col justify-between bg-white p-4 rounded-xl shadow-md w-full sm:w-[48%] md:w-[30%]"
            >
              {/* image info.. of products*/}
              <div>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                <p className="text-green-700 font-medium mb-4">₹ {product.price}</p>
              </div>

              <button
                onClick={() => handleDelete(product.id)}
                className="mt-auto bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
