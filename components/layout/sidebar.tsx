import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useRouter } from 'next/router';


type SideBarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
    const router = useRouter();
    /**const isActive = (href: string) => router.pathname === href;*/
    const isActive = (...paths: string[]) => paths.includes(router.pathname);

    return (
        <div className="relative md:hidden pb-6 shadow-lg z-50">
            <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
                <Bars3Icon className="w-[30px] h-[40px] text-gray-700 font-bold hover:text-hoverSecondary z-10" />
            </button>

            <div className={`absolute w-[270px] -top-8 sm:-top-7 -left-10 xs:left-0 bg-gray-200 rounded-md flex flex-col items-center gap-2 shadow-lg transform transition-transform duration-300 ease-in-out z-50 
            ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="w-full bg-secondary py-3 px-2 relative flex flex-wrap justify-center gap-4 items-center">
                    <p>Qiuck Navigation</p>
                    <button onClick={toggleSidebar} aria-label="close sidebar">
                        <XMarkIcon className="w-[30px] h-[30px] text-white hover:text-hoverPrimary transition duration-[100ms]" />
                    </button>
                </div>

                <div className="flex flex-col gap-2 z-40 p-2">
                    <ul className="text-gray-700 flex text-sm flex-col gap-2">
                        {/*<li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/deals')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/deals">Today Deals</a></li>*/}
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/spray')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/spray ">Spray</a></li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/popular')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/popular">Popular products</a></li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/new')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/new">New Products</a></li>

                        <li className={`text-black/50 ${isActive('/perfume/oil', '/perfume/luxury', '/perfume/designer', '/perfume/women', '/perfume/men', '/perfume/unisex')? 'text-hoverSecondary' : 'text-gray-700'} `}>Perfume
                            <ul className="text-gray-700 text-sm flex flex-col gap-2 pl-2 pt-2">
                                <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/perfume/oil')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/oil">Oil perfumes</a></li>
                                <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/perfume/luxury')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/luxury">Luxury perfumes</a></li>
                                <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/perfume/designer')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/designer">Designer's perfumes</a></li>
                                <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/perfume/women')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/women">Women's perfumes</a></li>
                                <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/perfume/men')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/men">Men's perfumes</a></li>
                                <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/perfume/unisex')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/unisex">Unisex Perfume</a></li>
                            </ul>
                        </li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/ouds')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/ouds">Ouds</a></li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/brands')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/brands">Brands</a></li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/arabic')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/arabic">Arabic</a></li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/french')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/french">French</a></li>
                    </ul>

                    <ul className="text-gray-700 text-sm flex flex-col gap-2 pt-2 pr-2 pb-4 pl-4">
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/account')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/account">My Account</a></li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/contact')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/contact">Contact Us</a></li>
                        <li className={`cursor-pointer hover:text-hoverSecondary ${isActive('/about')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/about">About Us</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}






export default Sidebar;