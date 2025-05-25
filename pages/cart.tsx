import Link from "next/link";
import { useCart } from "../lib/store";

export default function Cart() {
  const { items, updateQuantity, removeFromCart } = useCart();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link href="/products" className="text-blue-600">
            Shop now
          </Link>
        </p>
      ) : (
        <div>
          {items.map((i) => (
            <div key={i.id} className="flex items-center justify-between mb-4">
              <div>
                <p className="font-semibold">{i.title}</p>
                <p>
                  ${i.price} × {i.quantity}
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={i.quantity}
                  min={1}
                  onChange={(e) => updateQuantity(i.id, Number(e.target.value))}
                  className="border w-16 text-center mr-2"
                />
                <button
                  onClick={() => removeFromCart(i.id)}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
          <Link
            href="/checkout"
            className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
