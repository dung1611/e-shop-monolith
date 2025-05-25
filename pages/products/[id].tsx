import { GetStaticPaths, GetStaticProps } from "next";
import { fetchProducts, fetchProductById } from "../../lib/api";
import { Product } from "../../lib/types";
import { useCart } from "../../lib/store";
import Image from "next/image";

export default function ProductPage({ product }: { product: Product }) {
  const add = useCart((s) => s.addToCart);
  return (
    <div className="max-w-2xl mx-auto">
      <Image src={product.image} alt={product.title} width={400} height={400} />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-green-600 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button
        onClick={() => add(product)}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();
  const paths = products.map((p) => ({ params: { id: p.id.toString() } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await fetchProductById(params!.id as string);
  return { props: { product } };
};
