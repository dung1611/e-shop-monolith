import { useState } from "react";
import { useCart } from "../lib/store";

export default function Checkout() {
  const { items, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send order to backend
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-green-600">Thank you for your order!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input type="text" required className="w-full border p-2" />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Address</label>
        <textarea required className="w-full border p-2" />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </form>
  );
}
