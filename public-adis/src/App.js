import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import {
  Home,
  Category,
  AboutUs,
  Blog,
  Contact,
  FAQ,
  Auth,
  PostAds,
  MyProfile,
  MyAds,
  Product,
  Dashboard,
  SingleAd,
  ErrorPage,
  AllAds,
  Search,
  SingleBlog,
} from "./components/pages";
import { useAuth } from "./context/authContext";

function AuthRequireRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  //Navigate to loginPage if haven't login
  if (!isAuthenticated)
    return <Navigate to="/loginRegister" state={{ from: location }} replace />;

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthRequireRoute />}>
          <Route path="/postad" element={<PostAds />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myads" element={<MyAds />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/loginRegister" element={<Auth />} />
        <Route path="/product" element={<Product />} />
        <Route path="/singlead" element={<SingleAd />} />
        <Route path="/404not" element={<ErrorPage />} />
        <Route path="/allads" element={<AllAds />} />
        <Route path="/search" element={<Search />} />
        <Route path="/singleblog" element={<SingleBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
