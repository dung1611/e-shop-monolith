import Link from "next/link";
import { useCart } from "../lib/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { items } = useCart();
  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/" className="text-xl font-bold">
        E-Shop
      </Link>
      <div className="flex space-x-4">
        <Link href="/products">Products</Link>
        <Link href="/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6 inline" />
          {totalQty > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
              {totalQty}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
