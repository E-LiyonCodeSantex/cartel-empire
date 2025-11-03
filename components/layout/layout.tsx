import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="w-full fixed top-0 z-50">
                <Header />
            </div>
            <div className="mt-24 bg-gray-300">
            <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;