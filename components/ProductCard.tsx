import Link from "next/link";
import Image from "next/image";
import { Product } from "../lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
        />
        <h2 className="mt-2 font-semibold">{product.title}</h2>
        <p className="mt-1 text-green-600">${product.price}</p>
      </Link>
    </div>
  );
}
