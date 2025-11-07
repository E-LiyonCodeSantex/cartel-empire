import ProductCard from "@/components/common/productCard";
import { PRODUCTS } from "@/constant/productCard";
import StickyPageHeader from "@/components/common/pageTitle";


const NewProductsPage = () => {
    return (
        <div className="w-full bg-gray-100 pt-14 pb-4 px-2 flex flex-col justify-center items-center gap-4">
            <StickyPageHeader title="New Arrival" path="Home > newly arived" />

            <div className="w-full  flex flex-wrap justify-center items-center gap-4">
                {
                    PRODUCTS.filter(product => product.tags?.toLowerCase().includes("new")).map((product, index) => (
                        <ProductCard key={`new ${index}`} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default NewProductsPage;