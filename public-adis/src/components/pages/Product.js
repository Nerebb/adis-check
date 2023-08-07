import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter"
import ProductBanner from "../ProductBanner"
import ProductPost from "../ProductPost"

const Product = () => {
    return (
        <>
            <Navbar2 />
            <div className="content blog">
                <ProductBanner />
                <ProductPost />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default Product