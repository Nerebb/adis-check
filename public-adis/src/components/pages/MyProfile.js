import Footer from "../Footer"
import MyProfileBlog from "../MyProfileBlog"
import Spinner from "../Spinner";
import PostAdHero from "../PostAdHero"
import NavbarAuth from "../NavbarAuth";
import { NewsLetter2 } from "../NewsLetter";
const MyProfile = () => {
    return (
        <>
            <Spinner />
            <NavbarAuth />
            <div className="content blog">
                <PostAdHero />
                <MyProfileBlog />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default MyProfile