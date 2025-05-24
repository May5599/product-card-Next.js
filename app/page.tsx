"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/productcard";
import IntroScreen from "@/components/IntroScreen";
import { Product } from "@/types/Product";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Fetch products on mount
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
        setLoading(false);
      }
    };

    fetchProducts();

    // Show intro for 3 seconds
    const introTimer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(introTimer);
  }, []);

  if (showIntro) return <IntroScreen />;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-xl">
        Loading products...
      </div>
    );
  }

  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
