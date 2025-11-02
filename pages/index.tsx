import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import LandingSlider from "@/components/landing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <Header />
      <LandingSlider />
    </div>
  );
}
