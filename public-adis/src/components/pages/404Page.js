import Footer from "../Footer"
import { Navbar2 } from "../NavBar"
import  { NewsLetter2 } from "../NewsLetter"
import NotFoundBanner from "../NotFoundBanner"
import NotFoundHero from "../NotFoundHero"
import Spinner from "../Spinner"

const ErrorPage = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content blog">
                <NotFoundHero />
                <NotFoundBanner />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default ErrorPage