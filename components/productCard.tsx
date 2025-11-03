import Image from 'next/image';
import { ShoppingCartIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { ProductCardProps } from "@/interface/index";
import Link from 'next/link';

const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
    const [rating, setRating] = useState(product?.rating ?? 0);
    const [hoverRating, setHoverRating] = useState(0);

    const isOutOfStock = product.quantity < 1;

    return (
        <Link href={`/product/${product.id}`}>
            

            <div className='w-[180px] xs:w-[190px] flex flex-col justify-start items-center bg-gray-200 gap-1 p-2 border-2 border-gray-400 rounded-lg group'>
                <div className='relative group'>
                    {/* 🔖 Tags */}

                    <div className="absolute top-1 left-2 flex gap-1">

                        <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full font-semibold">
                            {product.tags}
                        </span>
                    </div>
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={170}
                        height={150}
                    />
                    <button
                        className="w-[170px] bg-black/70 hover:bg-red-600 text-white font-bold py-2 absolute bottom-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >Add To Cart</button>

                    <p className={`text-xs font-bold ${isOutOfStock ? 'text-red-500' : 'text-green-600'}`}>
                        {isOutOfStock ? 'Out of Stock' : 'In Stock'}
                    </p>

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
                                className={`w-6 h-6 cursor-pointer transition ${(hoverRating || rating) >= star ? 'text-secondary' : 'text-gray-400'
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
        </Link>
    )
}

export default ProductCard;