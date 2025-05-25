import ky from "ky";
import { Product } from "./types";

export async function fetchProducts(): Promise<Product[]> {
  return ky.get("https://fakestoreapi.com/products").json();
}

export async function fetchProductById(id: string): Promise<Product> {
  return ky.get(`https://fakestoreapi.com/products/${id}`).json();
}
