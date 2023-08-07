import Categories from "../Categories"
import CategoryBanner from "../CategoryBanner"
import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter";
import Spinner from "../Spinner";

const Category = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content allads">
                <CategoryBanner />
                <Categories />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default Category