import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";


type SideBarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className="relative md:hidden pb-6">
            <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
                <Bars3Icon className="w-[40px] h-[40px] text-gray-500 hover:text-hoverSecondary z-10" />
            </button>

            <div className={`absolute w-[270px] -top-8 sm:-top-7 -left-10 xs:left-0 bg-white rounded-md flex flex-col items-center gap-2 z-20 shadow-lg transform transition-transform duration-300 ease-in-out z-50 
            ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="w-full bg-secondary py-3 px-2 relative flex flex-wrap justify-center gap-4 items-center">
                    <p>Qiuck Navigation</p>
                    <button onClick={toggleSidebar} aria-label="close sidebar">
                        <XMarkIcon className="w-[30px] h-[30px] text-gray-800 hover:text-hoverSecondary transition duration-[500ms]" />
                    </button>
                </div>

                <div className="flex flex-col gap-4 z-40 p-4">
                    <ul className="text-gray-700 font-bold flex flex-col gap-2">
                        <li className="cursor-pointer hover:text-hoverSecondary">Today Deals</li>
                        <li className="cursor-pointer hover:text-hoverSecondary">Spray</li>
                        <li className="text-black/40">Perfume
                            <ul className="text-gray-700 font-bold flex flex-col gap-2 pl-4">
                                <li className="cursor-pointer hover:text-hoverSecondary">Oil perfumes </li>
                                <li className="cursor-pointer hover:text-hoverSecondary">Luxury perfumes </li>
                                <li className="cursor-pointer hover:text-hoverSecondary">Designer's perfumes</li>
                                <li className="cursor-pointer hover:text-hoverSecondary">Women's perfumes</li>
                                <li className="cursor-pointer hover:text-hoverSecondary">Men's perfumes</li>
                                <li className="cursor-pointer hover:text-hoverSecondary">Unisex Perfume</li>
                            </ul>
                        </li>
                        <li className="cursor-pointer hover:text-hoverSecondary">Ouds </li>
                        <li className="cursor-pointer hover:text-hoverSecondary">Brands</li>
                        <li className="cursor-pointer hover:text-hoverSecondary">Arabic</li>
                        <li className="cursor-pointer hover:text-hoverSecondary">French</li>
                    </ul>

                    <ul className="text-gray-700 font-bold flex flex-col gap-2 p-4">
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