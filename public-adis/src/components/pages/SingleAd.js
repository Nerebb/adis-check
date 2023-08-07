import Footer from "../Footer"
import { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter"
import SingleAdHero from "../SingleAdHero"
import SingleAdPost from "../SingleAdPost"
import Spinner from "../Spinner"

const SingleAd = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content blog">
                <SingleAdHero />
                <SingleAdPost />
            </div>
            <NewsLetter2 />
            <Footer />

        </>
    )
}

export default SingleAd