import { Great_Vibes } from 'next/font/google';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Sidebar from '@/components/layout/sidebar';
import Link from 'next/link';

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{setIsSidebarOpen(prev => !prev);}

    return (
        <header className='w-full'>
            <div className="flex justify-around items-start xs:items-center w-full h-[150px] xs:h-[100px] gap-2 py-8 xs:py-2 bg-gray-100 relative z-50 border-b-2 border-gray-300">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                {/*<Sidebar />*/}
                <div className="flex gap-2 items-center justify-center flex-wrap p-0 w-fit">
                    <h1 className={`${greatVibes.className} font-extrabold text-2xl xs:text-3xl flex flex-nowrap text-secondary`}>Empire</h1>

                    <h1 className={`${greatVibes.className} font-extrabold text-2xl xs:text-3xl flex flex-nowrap text-gray-600`}>Fragrance</h1>
                </div>

                <div className="flex justify-between items-center border-2 border-gray-400 gap-2 bg-white xs:relative absolute top-20 xs:top-0 mx-4 ">
                    <MagnifyingGlassIcon className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center text-primary hover:text-hoverPrimary" />
                    <input type="text"
                        placeholder="Brand fragrance collections..."
                        className="outline-none p-2 w-full max:w-[600px] min:w-300px] text-gray-700"
                    />
                    <button
                        className="bg-primary hover:bg-blue-700 w-[150px] h-full p-[15px]"
                    >Search</button>
                </div>

                <div className="flex gap-4 items-center justify-center px-2">
                    <Link href="/cart">
                    <div className='relative'>
                        <span className="absolute -top-6 -right-2.5 rounded-full border-2 border-primary text-secondary xs:p-[3px] p-[1px] xs:font-bold font-medium">05</span>
                        <ShoppingCartIcon className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] flex justify-center items-center text-primary" />
                    </div>
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex justify-around items-center w-full absolute top-[150px] xs:top-[100px] z-40">
                <ul className='flex gap-4 text-gray-700 bg-gray-100 py-2 px-4 rounded-b-3xl shadow-md'>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '>Today Deals</li>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/spray">Spray</a></li>
                    <div className='relative group '>
                        <li onClick={() => setIsOpen(!isOpen)}
                            className='font-bold pointer hover:text-hoverSecondary cursor-pointer  text-gray-700'>Perfume</li>
                        {isOpen && (
                            <ul className='hidden group-hover:flex flex-col justify-center items-start gap-2 absolute bg-gray-100 w-[210px] -left-15 rounded-b-xl py-4 px-6 shadow-lg z-50'>
                                <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/perfume/oil">Oil perfumes</a></li>
                                <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/perfume/luxury">Luxury perfumes</a></li>
                                <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/perfume/designer">Designer's perfumes</a></li>
                                <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/perfume/women">Women's perfumes</a></li>
                                <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/perfume/men">Men's perfumes</a></li>
                                <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/perfume/unisex">Unisex Perfume</a></li>
                            </ul>
                        )}
                    </div>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/ouds">Ouds</a></li>
                    <li className='font-bold pointer hover:textprimary cursor-pointer '><a href="/brands">Brands</a></li>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/arabic">Arabic</a></li>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '><a href="/french">French</a></li>
                </ul>

                <ul className='flex gap-4 text-gray-700 bg-gray-100 py-2 px-4 rounded-b-3xl shadow-md'>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '>My Account</li>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '>Contact Us</li>
                    <li className='font-bold pointer hover:text-hoverSecondary cursor-pointer '>About Us</li>
                </ul>

            </div>
        </header>
    )
}