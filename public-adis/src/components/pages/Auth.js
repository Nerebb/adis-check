import AuthBanner from "../AuthBanner"
import AuthForms from "../AuthForms"
import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter";
import Spinner from "../Spinner";

const Auth = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content blog">
                <AuthBanner />
                <AuthForms />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default Auth