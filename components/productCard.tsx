import Image from 'next/image';
import { ShoppingCartIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { ProductCardProps } from "@/interface/index";

const ProductCard: React.FC<{product: ProductCardProps}> = ({product}) => {
    const [rating, setRating] = useState(product?.rating ?? 0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className='w-full max-w-[190px] flex flex-col justify-start items-center bg-gray-200 gap-2 p-2 border-2 border-gray-400 rounded-lg'>
            <div className='relative group'>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={180}
                    height={150}
                />
                <div className='flex xs:hidden group-hover:flex flex-col gap-4 absolute right-2 top-4 z-10'>
                    <button>
                        <ShoppingCartIcon className="w-[30px] h-[30px] flex justify-center items-center text-gray-700 cursor-pointer" />
                    </button>
                    <button>
                        <HeartIcon className="w-[30px] h-[30px] flex justify-center items-center text-gray-700" />
                    </button>
                </div>
            </div>
            <div>
                {/* ⭐ Star Rating */}
                <div className="flex justify-center items-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                            key={star}
                            className={`w-6 h-6 cursor-pointer transition ${(hoverRating || rating) >= star ? 'text-[#E07529]' : 'text-gray-400'
                                }`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                        />
                    ))}
                </div>

                <h1 className='font-bold text-gray-800 text-lg'>{product.name}</h1>
                <p className='text-gray-600'>{product.description}</p>
                <p className='flex justify-start items-center gap-1 flex-wrap text-gray-600'>
                    <span className='font-bold text-gray-600'>{product.brand}</span>
                    <span className='font-bold text-gray-600'>{product.category}</span>
                </p>
                <div className='flex justify-start items-center gap-2 flex-wrap'>
                    <span className='font-bold text-gray-800 text-xl'>₦{product.price}</span>
                    <span className='font-bold text-black/40 text-xl line-through'>₦{product.salePrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;