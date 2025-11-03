import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header";
import LandingSlider from "@/components/landing";
import ProductCard from "@/components/productCard";
import { useState } from "react";
import { PRODUCTS } from "@/constant/productCard";
import PopUpCard from "@/components/common/popUpCard";
import Link from 'next/link';

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
    <div className="w-full bg-gray-100 xs:pt-1 pt-10">
      <div className="w-full fixed top-0 z-50">
        <Header />
      </div>

      <div className="flex flex-col justify-start items-center w-full gap-4">
        <LandingSlider />

        <div className="flex flex-wrap justify-center items-start w-full gap-4 px-2 py-4">
          <div className="w-full p-2 text-gray-800 flex justify-between font-bold items-center gap-4 border-b-2 border-gray-500">
            <h1>popular Products</h1>
            <button className="text-secondary hover:text-hoverSecondary">View All</button>
          </div>

          {PRODUCTS.filter(product => product.tags?.toLowerCase().includes("popular")).map((product, index) => (
            <ProductCard key={`popular-${index}`} product={product} />
          ))}

          <div className="w-full p-2 text-gray-800 flex justify-between font-bold items-center gap-4 border-b-2 border-gray-500">
            <h1>New Arrival</h1>
            <button className="text-secondary hover:text-hoverSecondary">View All</button>
          </div>
          {
            PRODUCTS.filter(product =>
              product.tags?.toLowerCase().includes("new")
            ).map((product, index) => (
              <ProductCard key={`New-${index}`} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

