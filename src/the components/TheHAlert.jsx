import { useState } from "react";

export function CustomHAlert({ message, onClose }) {
  return (
    <div className="bg-white/40 fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white/40 p-6 rounded-lg shadow-lg max-w-sm mx-auto transform transition duration-300 hover:scale-105">
        <p className="text-gray-800 text-center font-semibold">{message}</p>
        <button
          onClick={() => {
            onClose();
            window.location.href = "/signin";
          }}
          className="mt-4 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          OK
        </button>
      </div>
    </div>
  );
}