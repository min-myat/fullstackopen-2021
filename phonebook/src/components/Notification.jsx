import React from 'react';

export default function Notification({ type, message }) {
  if (message === null) return null;
  return (
    <div
      className={`my-4 p-2 rounded-md shadow text-center ${
        type === 'success' ? 'bg-green-300' : 'bg-red-300'
      }`}
    >
      <p
        className={`font-semibold ${
          type === 'success' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {message}
      </p>
    </div>
  );
}
