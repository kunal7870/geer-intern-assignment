'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailsPage() {
    // getting id from url
    const { id } = useParams();
    //to store the selected product details
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // all products from backend
                const res = await fetch('http://localhost:5000/api/products');
                const data = await res.json();

                // finding product of given id
                const item = data.find(p => p.id.toString() === id);

                // if found save to state else showing error
                if (item) {
                    setProduct(item);
                } else {
                    setError('Product not found');
                }
            } catch {
                setError('Error fetching product');
            }
        };

        if (id) fetchProduct(); // only fetch if id is available
    }, [id]);

    if (error) {
        return <div className="text-center mt-10 text-red-600">{error}</div>;
    }
    // loading while data is fetched
    if (!product) {
        return <div className="text-center mt-10 text-gray-500">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-72 object-scale-down mb-4 rounded"
                />

                <h1 className="text-3xl font-bold mb-2">Product: {product.name}</h1>

                <p className="text-xl text-green-700 mb-4">Price: ₹ {product.price}</p>

                <p className="text-gray-600">No detailed description provided. (Optional: add later)</p>
            </div>
        </div>
    );
}
