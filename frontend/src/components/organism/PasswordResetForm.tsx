import React, { useState } from 'react';
import api from '../../adapters/api/api';

const PasswordResetForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/password-reset/', {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error sending password reset:', error);
      setMessage('Error: email not found');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Password Reset
      </button>

      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </form>
  );
};

export default PasswordResetForm;
