// pages/product/[id].tsx
import { useRouter } from 'next/router';
import Image from "next/image";
import { StarIcon, PlusIcon, MinusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import PopUpCard from '@/components/common/popUpCard';
import { ProductCardProps } from '@/interface/index';
import { PRODUCTS } from '@/constant/productCard';


const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [product, setProduct] = useState<ProductCardProps | null>(null);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);


    /*useEffect(() => {
      if (id) {
        // Replace with your actual fetch logic
        fetch(`/api/products/${id}`)
          .then(res => res.json())
          .then(data => {
            setProduct(data);
            setRating(data.rating);
          });
      }
    }, [id]);*/

    useEffect(() => {
        if (id) {
            const foundProduct = PRODUCTS.find(p => String(p.id) === id);
            setProduct(foundProduct ?? null);
        }
    }, [id]);

    const handleAddToCart = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowPopup(true);
        }, 2000); // simulate request
    };

    if (!product) return <p className="w-full h-screen flex justify-center items-center text-gray-600 absolute top-0 left-0 transform translate-50 z-50">Loading...</p>;

    return (
        <div className="w-full flex justify-center items-center gap-4 px-4 flex-wrap pt-16 pb-8 relative">
            {showPopup && (
                <PopUpCard quantity={selectedQuantity}
                    total={selectedQuantity * product.price}
                    onClose={() => setShowPopup(false)} />
            )}
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={350}
                height={350}
                className="border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg"
            />
            <div className="flex flex-col justify-center items-start gap-2 text-gray-700">
                <h1 className="font-bold text-gray-800">{product.name}</h1>
                <b className="w-full p-4 bg-gray-400">₦{product.price}</b>
                <p>{product.description}</p>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
                <div className="flex flex-wrap justify-center items-end gap-2">
                    <span>{product.tags}</span>
                    <div className="flex justify-center items-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                                key={star}
                                className={`w-6 h-6 cursor-pointer transition ${(hoverRating || rating) >= star ? 'text-secondary' : 'text-gray-400'}`}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            />
                        ))}
                    </div>
                </div>
                <p className="text-xs font-bold text-green-600">In Stock: {product.quantity}</p>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <div className="w-fit border-2 border-gray-600 gap-4 flex flex-wrap justify-center items-center">
                        <button onClick={() => setSelectedQuantity(prev => Math.max(1, prev - 1))}
                            className="w-[50px] h-[50px] px-2 flex justify-center items-center border-r-2 border-gray-700 bg-gray-500 hover:bg-red-500">
                            <MinusIcon className="w-6 h-6 font-bold text-white" />
                        </button>
                        <span
                            className="w-[50px] flex justify-center items-center font-bold text-gray-800">
                            {selectedQuantity}</span>
                        <button onClick={() => setSelectedQuantity(prev => prev + 1)}
                            className="w-[50px] h-[50px] px-2 flex justify-center items-center border-l-2 border-gray-700 bg-gray-500 hover:bg-green-800">
                            <PlusIcon className="w-6 h-6 font-bold text-white" />
                        </button>
                    </div>

                    <button
                        className="py-2 px-4 bg-gray-600 font-bold text-white flex items-center gap-2"
                        onClick={handleAddToCart}
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-t-2 border-gray-700 rounded-full animate-spin">
                                <XMarkIcon className='w-4 h-4 text-gray-100' />
                            </span>
                        ) : (
                            'Add to Cart'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
