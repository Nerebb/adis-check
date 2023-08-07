import AllAdsBanner from "../AllAdsBanner"
import CategoryBanner from "../CategoryBanner"
import Footer from "../Footer"
import { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter"
import Spinner from "../Spinner"

const AllAds = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content allads">
                <CategoryBanner />
                <AllAdsBanner />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default AllAds