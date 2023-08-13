import {
  Navigate,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import { LoadingScreen } from "./components/constants/LoadingScreen";
import {
  AboutUs,
  AllAds,
  Auth,
  Blog,
  Category,
  Contact,
  Dashboard,
  ErrorPage,
  FAQ,
  Home,
  MyAds,
  MyProfile,
  PostAds,
  Product,
  Search,
  SingleAd,
  SingleBlog,
} from "./components/pages";
import { useAuth } from "./context/authContext";

function AuthRequireRoute() {
  const { isInitialize, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isInitialize) return <LoadingScreen />;

  if (!isAuthenticated)
    return <Navigate to="/loginRegister" state={{ from: location }} replace />;

  return <Outlet />;
}

function App() {
  return (
    <Router>
      <Routes>
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

        <Route path="/" element={<AuthRequireRoute />}>
          <Route path="postad" element={<PostAds />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="myads" element={<MyAds />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
