import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import AuthBanner from "../AuthBanner";
import AuthForms from "../AuthForms";
import Footer from "../Footer";
import { Navbar2 } from "../NavBar";
import { NewsLetter2 } from "../NewsLetter";
import Spinner from "../Spinner";
import { LoadingScreen } from "../constants/LoadingScreen";

const Auth = () => {
  const { isInitialize, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  if (!isInitialize) return <LoadingScreen />;

  if (isAuthenticated) return navigate("/dashboard");
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
  );
};

export default Auth;
