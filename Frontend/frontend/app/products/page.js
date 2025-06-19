'use client';

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  // fetch product list from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-black mb-6 text-center">All Products</h1>

        {products.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">No products available right now.</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-sm shadow w-full sm:w-[48%] md:w-[30%] flex flex-col items-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold text-center">{product.name}</h2>
                <p className="text-green-700 font-medium text-center">₹ {product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
