import { Bars3Icon } from "@heroicons/react/24/solid";

const Sidebar = () =>{
    return(
        <div className="relative md:hidden px-4">
            <button>
                <Bars3Icon className="w-[40px] h-[40px] text-gray-500 hover:text-black z-10"/>
            </button>

            <div className="hidden">
                <ul>
                    <li>Today Deals</li>
                    <li>Spray</li>
                    <li>Perfume
                        <ul>
                            <li>Oil perfumes </li>
                            <li>Luxury perfumes </li>
                            <li>Designer's perfumes</li>
                            <li>Women's perfumes</li>
                            <li>Men's perfumes</li>
                            <li>Unisex Perfume</li>
                        </ul>
                    </li>
                    <li>Ouds </li>
                    <li>Brands</li>
                    <li>Arabic</li>
                    <li>French</li>
                </ul>

                <ul>
                    <li>My Account</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>

            </div>
        </div>
    )
}






export default Sidebar