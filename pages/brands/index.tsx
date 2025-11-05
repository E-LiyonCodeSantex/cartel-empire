import ProductCard from "@/components/common/productCard";
import { PRODUCTS } from "@/constant/productCard";
import { ProductCardProps } from "@/interface/index";
import { shuffle } from 'lodash'; // optional, or write your own shuffle
import { useEffect, useState } from 'react';


const BrandsPage = () => {
    const [shuffledProducts, setShuffledProducts] = useState<ProductCardProps[]>([]);

    useEffect(() => {
        const grouped = PRODUCTS.reduce<Record<string, ProductCardProps[]>>((acc, product) => {
            if (!product.brand) return acc;
            acc[product.brand] = acc[product.brand] || [];
            acc[product.brand].push(product);
            return acc;
        }, {});

        const selected = Object.values(grouped).flatMap(products => {
            const count = products.length >= 2 ? 2 : 1;
            const shuffled = [...products].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        });

        setShuffledProducts(shuffle(selected));
    }, []);

    return (
        <div className="w-full bg-gray-100 pt-14 pb-4 px-2 flex flex-col justify-center items-center gap-4">
            <div className="w-full p-2 text-gray-800 flex justify-center font-bold items-center gap-4 border-b-2 border-gray-500">
                <h1 className="font-bold text-2xl text-primary">Brands</h1>
            </div>

            <div className="w-full  flex flex-wrap justify-center items-center gap-4">
                {
                    shuffledProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }

            </div>
        </div>
    )
}

export default BrandsPage;