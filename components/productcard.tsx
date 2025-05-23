"use client";

import { Product } from "../types/Product";
import Image from "next/image";
import { FC, useState } from "react";
import { Star } from "lucide-react";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {/* Toast Overlay */}
      {showToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-black text-white text-lg px-6 py-3 rounded-xl shadow-xl animate-fadeIn pointer-events-auto">
            ✅ Added to Cart
          </div>
        </div>
      )}

      {/* Product Card */}
      <div className="group flex flex-col bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden p-4">
        <div className="w-full flex justify-center items-center bg-gray-100 rounded-md h-56 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            width={160}
            height={160}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center space-x-1 text-yellow-500 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.round(product.rating.rate) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              fill={i < Math.round(product.rating.rate) ? "currentColor" : "none"}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating.count})</span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-base font-bold text-blue-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="text-xs font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
