import { GetStaticProps } from "next";
import { fetchProducts } from "../../lib/api";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../lib/types";

export default function Products({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await fetchProducts();
  return { props: { products } };
};
