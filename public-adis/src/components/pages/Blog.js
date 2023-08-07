import BlogHero from "../BlogHero"
import BlogPost from "../BlogPost"
import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter";
import Spinner from "../Spinner";


const Blog = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content allads">
                <BlogHero />
                <BlogPost />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default Blog