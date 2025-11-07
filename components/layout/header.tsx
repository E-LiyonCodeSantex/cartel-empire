import { Great_Vibes } from 'next/font/google';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserPlusIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/layout/sidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserRegisterModal from "@/components/join/userRegisterModal";

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Header() {
    const [showRegister, setShowRegister] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const router = useRouter();

    /*const isActive = (href: string) => router.pathname === href;*/
    const isActive = (...paths: string[]) => paths.includes(router.pathname);


    const toggleSidebar = () => { setIsSidebarOpen(prev => !prev); }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowHeader(false); // scrolling down
            } else {
                setShowHeader(true); // scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    return (
        <header className={`fixed top-0 left-0 w-full z-45 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex justify-around items-start xs:items-center w-full h-[150px] xs:h-[100px] gap-2 py-8 xs:py-2 bg-gray-100 relative z-45 border-b-2 border-gray-300">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {/*<Sidebar />*/}
                <a className="flex gap-2 items-center justify-center flex-wrap p-0 w-fit"
                    href="/">
                    <h1 className={`${greatVibes.className} font-extrabold text-2xl xs:text-3xl flex flex-nowrap text-secondary`}>Empire</h1>

                    <h1 className={`${greatVibes.className} font-extrabold text-2xl xs:text-3xl flex flex-nowrap text-gray-600`}>Fragrance</h1>
                </a>

                <div className="flex justify-between items-center border-2 border-gray-400 gap-2 bg-gray-300 xs:relative absolute top-20 xs:top-0 mx-4 ">
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
                    <div onClick={() => setShowRegister(true)} className="cursor-pointer">
                        <UserPlusIcon className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] text-primary" />
                    </div>
                    <UserRegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />

                    <ArrowRightOnRectangleIcon className="w-[30px] sm:w-[40px] h-[30px] sm:h-[30px] flex justify-center items-center text-primary" />
                </div>
            </div>

            <div className="hidden md:flex justify-around items-center w-full absolute top-[150px] xs:top-[100px] z-40">
                <ul className='flex gap-4 text-gray-700 bg-gray-100 py-2 px-4 rounded-b-3xl shadow-md'>
                    {/*<li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/deals')? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/deals">Today Deals</a></li>*/}
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/spray') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/spray">Spray</a></li>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/popular') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/popular">Popular products</a></li>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/new') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/new">New Products</a></li>
                    <div className='relative group '>
                        <li onClick={() => setIsOpen(!isOpen)}
                            className={`font-bold pointer hover:text-hoverSecondary cursor-pointer  text-gray-700 ${isActive('/perfume/oil', '/perfume/luxury', '/perfume/designer', '/perfume/women', '/perfume/men', '/perfume/unisex') ? 'text-hoverSecondary' : 'text-gray-700'} `}>Perfume</li>
                        {isOpen && (
                            <ul className='hidden group-hover:flex flex-col justify-center items-start gap-2 absolute bg-gray-100 w-[210px] -left-15 rounded-b-xl py-4 px-6 shadow-lg z-50'>
                                <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/perfume/oil') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/oil">Oil perfumes</a></li>
                                <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/perfume/luxury') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/luxury">Luxury perfumes</a></li>
                                <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/perfume/designer') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/designer">Designer's perfumes</a></li>
                                <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/perfume/women') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/women">Women's perfumes</a></li>
                                <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/perfume/men') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/men">Men's perfumes</a></li>
                                <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/perfume/unisex') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/perfume/unisex">Unisex Perfume</a></li>
                            </ul>
                        )}
                    </div>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/ouds') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/ouds">Ouds</a></li>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/brands') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/brands">Brands</a></li>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/arabic') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/arabic">Arabic</a></li>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/french') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="/french">French</a></li>
                </ul>

                <ul className='flex gap-4 text-gray-700 bg-gray-100 py-2 px-4 rounded-b-3xl shadow-md'>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/account') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="account">My Account</a></li>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/contact') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="contact">Contact Us</a></li>
                    <li className={`font-bold pointer hover:text-hoverSecondary cursor-pointer ${isActive('/about') ? 'text-hoverSecondary' : 'text-gray-700'} `}><a href="about">About Us</a></li>
                </ul>

            </div>
        </header>
    )
}