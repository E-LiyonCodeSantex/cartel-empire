import Image from "next/image";
import { StarIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ProductDetailsSample = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    return (
        <div className=" w-full flex justify-center items-center  gap-4 px-4 flex-wrap pt-6 pb-8">
            <Image
                src="/assets/image/products/perfume.jpg"
                alt="Product Image"
                width={350}
                height={350}
                className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg"
            />

            <div className="flex flex-col justify-center items-start gap-2 text-gray-700 ">
                <h1 className="font-bold text-gray-800">Elegant Rose Perfume</h1>
                <b className="w-full p-4 bg-gray-400">₦79.99</b>
                <p>A luxurious rose-scented perfume for special occasions.</p>
                <p>Brand: FloralEssence</p>
                <p>Category: men Perfume</p>
                <div className="flex flex-wrap justify-center items-end gap-2">
                    <span>Popular</span>
                    <div className="flex justify-center items-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                                key={star}
                                className={`w-6 h-6 cursor-pointer transition ${(hoverRating || rating) >= star ? 'text-secondary' : 'text-gray-400'
                                    }`}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            />
                        ))}
                    </div>
                </div>
                <p className="text-xs font-bold text-green-600">
                    In Stock: 20
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <div className="w-fit border-2 border-gray-600 gap-4 flex flex-wrap justify-center items-center">
                        <button className="w-[50px] h-[50px] px-2 flex justify-center items-center border-r-2 border-gray-600 hover:bg-gray-400">
                            <MinusIcon className="w-5 h-5 text-gray-700" />
                        </button>
                        <span className="w-[50px] flex justify-center items-center font-bold text-gray-800">10</span>
                        <button className="w-[50px] h-[50px] px-2 flex justify-center items-center border-l-2 border-gray-600 hover:bg-gray-400">
                            <PlusIcon className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>

                    <button className="py-2 px-4 bg-gray-400 hover:bg-gray-500 font-bold text-gray-700">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsSample;