'use client'

import { laptopList, phoneList, headPhoneList } from "@/app/product-list/Products";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchOverlay = ({
    onClose,
    onProductSelect,
  }: {
    onClose: () => void;
    onProductSelect?: () => void;
  }) => {
    const [query, setQuery] = useState('');
    const router = useRouter();
  
    const allProducts = [...laptopList, ...phoneList, ...headPhoneList];
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  
    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);
  
    const handleSelect = (product: any) => {
      router.push(`/${product.category}/${product.slug}`);
      onClose();
      if (onProductSelect) onProductSelect(); // 👈 optional callback
    };
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-center items-start pt-28 px-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-blue-700/10 w-full max-w-xl rounded-xl p-6 backdrop-blur-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 border-b border-gray-500 pb-2">
            <Image src="/Icons/Search.svg" alt="Search" width={20} height={20} />
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
            />
            <button onClick={onClose} className="text-gray-300 text-xl">&times;</button>
          </div>
  
          {query && (
            <div className="mt-4 max-h-80 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.slug}
                    onClick={() => handleSelect(product)} // ✅ triggers onProductSelect too
                    className="p-3 hover:bg-white/10 rounded-md cursor-pointer text-white"
                  >
                    {product.name}
                  </div>
                ))
              ) : (
                <p className="text-gray-300 mt-2">No products found.</p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  };
  
  export default SearchOverlay;
  