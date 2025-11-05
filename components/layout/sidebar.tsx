import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";


type SideBarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className="relative md:hidden pb-6 shadow-lg">
            <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
                <Bars3Icon className="w-[30px] h-[40px] text-gray-700 font-bold hover:text-hoverSecondary z-10" />
            </button>

            <div className={`absolute w-[270px] -top-8 sm:-top-7 -left-10 xs:left-0 bg-white rounded-md flex flex-col items-center gap-2 z-20 shadow-lg transform transition-transform duration-300 ease-in-out z-50 
            ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="w-full bg-secondary py-3 px-2 relative flex flex-wrap justify-center gap-4 items-center">
                    <p>Qiuck Navigation</p>
                    <button onClick={toggleSidebar} aria-label="close sidebar">
                        <XMarkIcon className="w-[30px] h-[30px] text-white hover:text-hoverPrimary transition duration-[100ms]" />
                    </button>
                </div>

                <div className="flex flex-col gap-4 z-40 p-2">
                    <ul className="text-gray-700 flex text-sm flex-col gap-2">
                        <li className="cursor-pointer hover:text-hoverSecondary">Today Deals</li>
                        <li className="cursor-pointer hover:text-hoverSecondary"><a href="/spray ">Spray</a></li>
                        <li className="text-black/50">Perfume
                            <ul className="text-gray-700 text-sm flex flex-col gap-2 pl-2">
                                <li className="cursor-pointer hover:text-hoverSecondary"><a href="/perfume/oil">Oil perfumes</a></li>
                                <li className="cursor-pointer hover:text-hoverSecondary"><a href="/perfume/luxury">Luxury perfumes</a></li>
                                <li className="cursor-pointer hover:text-hoverSecondary"><a href="/perfume/designer">Designer's perfumes</a></li>
                                <li className="cursor-pointer hover:text-hoverSecondary"><a href="/perfume/women">Women's perfumes</a></li>
                                <li className="cursor-pointer hover:text-hoverSecondary"><a href="/perfume/men">Men's perfumes</a></li>
                                <li className="cursor-pointer hover:text-hoverSecondary"><a href="/perfume/unisex">Unisex Perfume</a></li>
                            </ul>
                        </li>
                        <li className="cursor-pointer hover:text-hoverSecondary"><a href="/ouds">Ouds</a></li>
                        <li className="cursor-pointer hover:text-hoverSecondary"><a href="/brands">Brands</a></li>
                        <li className="cursor-pointer hover:text-hoverSecondary"><a href="/arabic">Arabic</a></li>
                        <li className="cursor-pointer hover:text-hoverSecondary"><a href="/french">French</a></li>
                    </ul>

                    <ul className="text-gray-700 text-sm flex flex-col gap-2 p-4">
                        <li className="cursor-pointer hover:text-hoverSecondary">My Account</li>
                        <li className="cursor-pointer hover:text-hoverSecondary">Contact Us</li>
                        <li className="cursor-pointer hover:text-hoverSecondary">About Us</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}






export default Sidebar;