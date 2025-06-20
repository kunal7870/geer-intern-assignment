'use client';

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  // fetch product list from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

   // Filtered products
   const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-black mb-6 text-center">All Products</h1>

        {/*search input */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-2/3 md:w-1/2 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">No Matching products found.</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {filtered.map(product => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-sm shadow w-full sm:w-[48%] md:w-[30%] flex flex-col items-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg shadow-sm mb-3"
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
