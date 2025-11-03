import { Great_Vibes } from 'next/font/google';
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Sidebar from '@/components/sidebar';

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
                    <h1 className={`${greatVibes.className} font-extrabold text-2xl xs:text-3xl flex flex-nowrap text-[#E07529]`}>Empire</h1>

                    <h1 className={`${greatVibes.className} font-extrabold text-2xl xs:text-3xl flex flex-nowrap text-gray-600`}>Fragrance</h1>
                </div>

                <div className="flex justify-between items-center border-2 border-gray-400 gap-2 bg-white xs:relative absolute top-20 xs:top-0 mx-4 ">
                    <MagnifyingGlassIcon className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] text-gray-500 flex justify-center items-center text-[#2CA6A6]" />
                    <input type="text"
                        placeholder="Brand fragrance collections..."
                        className="outline-none p-2 w-full max:w-[600px] min:w-300px] text-gray-700"
                    />
                    <button
                        className="bg-[#2CA6A6] w-[150px] h-full p-[15px]"
                    >Search</button>
                </div>

                <div className="flex gap-4 items-center justify-center px-2">
                    <div className='relative'>
                        <span className="absolute -top-5 -right-2.5 text-[#2CA6A6] p-[3px] font-bold">05</span>
                        <HeartIcon className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] flex justify-center items-center text-[#E07529]" />
                    </div>
                    <div className='relative'>
                        <span className="absolute -top-6 -right-2.5 rounded-full border-2 border-[#2CA6A6] text-[#E07529] xs:p-[3px] p-[1px] xs:font-bold font-medium">05</span>
                        <ShoppingCartIcon className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] flex justify-center items-center text-[#2CA6A6]" />
                    </div>
                </div>
            </div>

            <div className="hidden md:flex justify-around items-center w-full absolute top-[150px] xs:top-[100px] z-40">
                <ul className='flex gap-4 text-gray-700 bg-gray-100 py-2 px-4 rounded-b-3xl shadow-md'>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Today Deals</li>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Spray</li>
                    <div className='relative group '>
                        <li onClick={() => setIsOpen(!isOpen)}
                            className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer  text-gray-700'>Perfume</li>
                        {isOpen && (
                            <ul className='hidden group-hover:flex flex-col justify-center items-start gap-2 absolute bg-gray-100 w-[200px] -left-15 rounded-b-xl py-4 px-6 shadow-lg z-50'>
                                <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Oil perfumes </li>
                                <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Luxury perfumes </li>
                                <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Designer's perfumes</li>
                                <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Women's perfumes</li>
                                <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Men's perfumes</li>
                                <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Unisex Perfume</li>
                            </ul>
                        )}
                    </div>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Ouds </li>
                    <li className='font-bold pointer hover:text[#2CA6A6] cursor-pointer '>Brands</li>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Arabic</li>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>French</li>
                </ul>

                <ul className='flex gap-4 text-gray-700 bg-gray-100 py-2 px-4 rounded-b-3xl shadow-md'>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>My Account</li>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>Contact Us</li>
                    <li className='font-bold pointer hover:text-[#2CA6A6] cursor-pointer '>About Us</li>
                </ul>

            </div>
        </header>
    )
}