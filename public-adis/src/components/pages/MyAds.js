import Footer from "../Footer"
import MyAdsPost from "../MyAdsPost"
import Spinner from "../Spinner";
import PostAdHero from "../PostAdHero";
import NavbarAuth from "../NavbarAuth";
import { NewsLetter2 } from "../NewsLetter";
const MyAds = () => {
    return (
        <>
            <Spinner />
            <NavbarAuth />
            <div className="content allads">
                <PostAdHero />
                <MyAdsPost />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default MyAds