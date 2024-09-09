import React, { useState } from 'react';
import api from '../../adapters/api/api';

const AddProductForm: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/products/', {
        name: productName,
        description: description,
        price: price,
        category: category,  // Send the category as a string
      });
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-bold mb-4">Add Product</h1>
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Product Name
              </label>
              <input
                  type="text"
                  id="name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
              />
          </div>

          <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
              </label>
              <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
              />
          </div>

          <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
              </label>
              <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
              />
          </div>

          <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
              </label>
              <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
              />
          </div>

          <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
              Add Product
          </button>
      </form>
  );
};

export default AddProductForm;
