import React, { useState } from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';

const AmazonClone = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 29.99, rating: 4.5 },
    { id: 2, name: 'Laptop Stand', price: 24.99, rating: 4.3 },
    { id: 3, name: 'Smart Watch', price: 199.99, rating: 4.7 },
    { id: 4, name: 'Bluetooth Speaker', price: 79.99, rating: 4.4 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center flex-1">
              <Menu className="h-6 w-6 mr-4" />
              <img src="/api/placeholder/120/50" alt="Amazon" className="h-8" />
              <div className="flex-1 mx-4">
                <div className="flex">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 text-black rounded-l"
                    placeholder="Search products..."
                  />
                  <button className="bg-yellow-500 px-6 rounded-r">
                    <Search className="h-5 w-5 text-gray-800" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <div className="text-sm">Hello, Sign in</div>
                  <div className="font-bold">Account & Lists</div>
                </div>
                <div>
                  <div className="text-sm">Returns</div>
                  <div className="font-bold">& Orders</div>
                </div>
                <div className="flex items-center">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="ml-1 font-bold">Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6">
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <img src={`/api/placeholder/200/200`} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="font-bold mb-2">{product.name}</h3>
              <div className="text-yellow-500 mb-2">{'★'.repeat(Math.floor(product.rating))}</div>
              <div className="text-xl font-bold">${product.price}</div>
              <button className="mt-4 w-full bg-yellow-400 py-2 rounded hover:bg-yellow-500">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
