'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-blue-800">Product App</h1>
        <p className="text-gray-600 text-lg">What would u like to do</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <button
            onClick={() => router.push('/products')}
            className="bg-yellow-400 text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 hover:scale-105 transition-transform duration-200"
          >
            View Products
          </button>
          <button
            onClick={() => router.push('/manage')}
            className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-transform duration-200"
          >
            Manage Products
          </button>
        </div>
      </div>
    </div>
  );
}
