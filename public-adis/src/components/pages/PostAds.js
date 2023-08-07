import Footer from "../Footer"
import NavbarAuth from "../NavbarAuth"
import { NewsLetter2 } from "../NewsLetter"
import PostAdsBanner from "../PostAdsBanner"
import Spinner from "../Spinner"

const PostAds = () => {
    return (
        <>
            <Spinner />
            <NavbarAuth />
            <PostAdsBanner />
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default PostAds