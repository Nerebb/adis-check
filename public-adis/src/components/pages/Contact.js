import ContactBanner from "../../ContactBanner"
import ContactPost from "../ContactPost"
import Footer from "../Footer"
import  { Navbar2 } from "../NavBar"
import { NewsLetter2 } from "../NewsLetter";
import Spinner from "../Spinner";

const Contact = () => {
    return (
        <>
            <Spinner />
            <Navbar2 />
            <div className="content allads">
                <ContactBanner />
                <ContactPost />
            </div>
            <NewsLetter2 />    
            <Footer />
        </>
    )
}


export default Contact