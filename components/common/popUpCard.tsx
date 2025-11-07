import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from 'next/router';
import { use, useState } from "react";

interface PopUpCardProps {
    quantity: number;
    total: number;
    onClose: () => void;
}

const PopUpCard = ({ quantity, total, onClose }: PopUpCardProps) => {
    const router = useRouter();
    const { query } = useRouter();

    return (
        <div onClick={onClose}
            className="w-full h-screen flex justify-center items-center fixed top-0 left-0 transform translate-50 z-50 bg-black/50">
            <div onClick={(e) => e.stopPropagation()}
                className="w-[300px] h-[300px] bg-gray-100 border-2 border-gray-400 rounded-br-2xl rounded-tl-2xl shadow-lg ">
                <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-4 text-gray-700">
                    <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-primary">
                        <CheckIcon className="w-16 h-16 text-white" />
                    </div>
                    <h1 className="font-bold">Item added to your cart</h1>
                    <p>
                        {quantity} item{quantity > 1 ? 's' : ''} in the cart{' '}
                        <span className="text-red-500">(₦{total.toFixed(2)})</span>
                    </p>
                    <div className="w-full flex flex-wrap gap-2 justif-center items-center">
                        <button
                            onClick={() => {
                                onClose(); // close the pop-up
                                router.back(); // go back to previous page
                            }}
                            className="bg-primary text-white font-bold p-2 rounded hover:bg-hoverPrimary"
                        >Continue Shopping</button>
                       <Link href="/cart">
                        <button
                            onClick={() =>{
                                onClose
                            }}
                            className="bg-gray-500 text-white font-bold p-2 rounded hover:bg-gray-600"
                        >View Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUpCard;