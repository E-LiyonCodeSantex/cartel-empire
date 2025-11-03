import Image from "next/image";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';

const CartPage = () => {
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4 pt-16 text-gray-200 pb-6">
            <div className="flex w-full justify-between items-center gap-4 px-4 py-2 bg-gray-600">
                <h1>Cart (100)</h1>
                <button className="text-white/70 hover:text-white flex justify-cennter items-center gap-1">
                    <TrashIcon className="w-6 h-6 font-bold " />
                    Clear All
                </button>
            </div>


            <div className="w-full max-w-[350px] flex flex-col bg-gray-100 border-2 border-gray-600 rounded-br-2xl rounded-tl-2xl justify-center items-center gap-1 p-2">
                <div className="flex w-full justify-between items-center text-gray-700 flex-wrap gap-2 rounded-tl-2xl p-1">
                    <div className="w-[75px] h-[70px] relative border-2 border-gray-400 rounded-xl bg-gray-400">
                        <Image
                            src="/assets/image/products/perfume.jpg"
                            alt="perfume"
                            fill
                            className="rounded-xl"
                        />
                    </div>
                    <div className="w-[220px] flex justify-between items-center gap-2">
                        <div>
                            <p className="w-[120px] font-bold ">Elegant Rose Perfume</p>
                            <p>Brand: Paris</p>
                        </div>
                        <p>₦115,452</p>
                    </div>
                </div>

                <div className="flex w-full justify-between items-center gap-2">
                    <button className="text-gray-600 font-bold hover:text-hoverSecondary flex justify-cennter items-center gap-1">
                        <TrashIcon className="w-6 h-6 font-bold " />
                        Remove
                    </button>
                    <div className="w-fit border-2 border-gray-600 gap-4 flex flex-wrap justify-center items-center">
                        <button onClick={() => setSelectedQuantity(prev => Math.max(1, prev - 1))}
                            className="w-[50px] h-[50px] px-2 flex justify-center items-center border-r-2 border-gray-700 bg-gray-500 hover:bg-hoverSecondary">
                            <MinusIcon className="w-6 h-6 font-bold text-white" />
                        </button>
                        <span
                            className="w-[30px] flex justify-center items-center font-bold text-gray-800">
                            {selectedQuantity}</span>
                        <button onClick={() => setSelectedQuantity(prev => prev + 1)}
                            className="w-[50px] h-[50px] px-2 flex justify-center items-center border-l-2 border-gray-700 bg-gray-500 hover:bg-green-800">
                            <PlusIcon className="w-6 h-6 font-bold text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;