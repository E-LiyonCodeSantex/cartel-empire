import ProductCard from "@/components/common/productCard";
import { PRODUCTS } from "@/constant/productCard";


const WomenPerfumePage = () => {
    return (
        <div className="w-full bg-gray-100 pt-14 pb-4 px-2 flex flex-col justify-center items-center gap-4">
            <div className="w-full p-2 text-gray-800 flex justify-center font-bold items-center gap-4 border-b-2 border-gray-500">
                <h1 className="font-bold text-2xl text-primary">Women's perfumes</h1>
            </div>

            <div className="w-full  flex flex-wrap justify-center items-center gap-4">
                {
                    PRODUCTS.filter(product => product.category?.toLowerCase().includes("women perfume")).map((product, index) => (
                        <ProductCard key={`women ${index}`} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default WomenPerfumePage;