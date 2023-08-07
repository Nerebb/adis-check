import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter"
import SingleBlogHero from "../SingleBlogHero"
import SingleBlogPost from "../SingleBlogPost"
import Spinner from "../Spinner"

const SingleBlog = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content blog">
                <SingleBlogHero />
                <SingleBlogPost />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default SingleBlog