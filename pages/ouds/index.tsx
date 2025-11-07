import ProductCard from "@/components/common/productCard";
import { PRODUCTS } from "@/constant/productCard";
import StickyPageHeader from "@/components/common/pageTitle";


const OudsPage = () => {
    return (
        <div className="w-full bg-gray-100 pt-14 pb-4 px-2 flex flex-col justify-center items-center gap-4">
            <StickyPageHeader title="Ouds" path="Home > ouds" />

            <div className="w-full  flex flex-wrap justify-center items-center gap-4">
                {
                    PRODUCTS.filter(product => product.category?.toLowerCase().includes("ouds")).map((product, index) => (
                        <ProductCard key={`ouds ${index}`} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default OudsPage;