import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import LandingSlider from "@/components/landing";
import ProductCard from "@/components/productCard";
import { useState } from "react";
import { PRODUCTS } from "@/constant/productCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100 pb-6">
      <div className="w-full fixed top-0 z-50">
        <Header />
      </div>

      <div className="flex flex-col justify-start items-center w-full gap-4 mt-24">
        <LandingSlider />

        <div className="flex flex-wrap justify-center items-start w-full gap-4 p-4">
          <div className="w-full p-2 text-gray-800 flex justify-between font-bold items-center gap-4 border-b-2 border-gray-500">
            <h1>Perfumes</h1>
            <button className="text-[#E07529] hover:text-[#2CA6A6]">View All</button>
          </div>
          {PRODUCTS.filter(product => product.name.toLowerCase().includes("perfume")).map((product, index) => (
            <ProductCard key={`perfume-${index}`} product={product} />
          ))}
          <div className="w-full p-2 text-gray-800 flex justify-between font-bold items-center gap-4 border-b-2 border-gray-500">
            <h1>FloralEssence</h1>
            <button className="text-[#E07529] hover:text-[#2CA6A6]">View All</button>
          </div>
          {PRODUCTS.filter(product => product.brand === "FloralEssence").map((product, index) => (
            <ProductCard key={`floral-${index}`} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

