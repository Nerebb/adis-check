import CoverChange from "../CoverChange"
import DashboardPost from "../DashboardPost"
import Footer from "../Footer"
import NavbarAuth from "../NavbarAuth";
import { NewsLetter2 } from "../NewsLetter";
import Spinner from "../Spinner";

const Dashboard = () => {
    return (
        <>
            <Spinner />
            <NavbarAuth />
            <div className="content blog">
                <CoverChange />
                <DashboardPost />
            </div>
            <NewsLetter2 />
            <Footer />
        </>
    )
}

export default Dashboard