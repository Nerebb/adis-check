import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { Home, Category, AboutUs, Blog, Contact, FAQ, Auth, PostAds, MyProfile, MyAds, Product, Dashboard, SingleAd, ErrorPage, AllAds, Search, SingleBlog } from "./components/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/category' element={<Category /> } />
        <Route path='/about-us' element={<AboutUs /> } />
        <Route path='/blog' element={<Blog /> } />
        <Route path='/contactus' element={<Contact /> } />
        <Route path='/faq' element={<FAQ /> } />
        <Route path='/loginRegister' element={<Auth /> } />
        <Route path='/postad' element={<PostAds /> } />
        <Route path='/myprofile' element={<MyProfile /> } />
        <Route path='/myads' element={<MyAds /> } />
        <Route path='/product' element={<Product /> } />
        <Route path='/dashboard' element={<Dashboard /> } />
        <Route path='/singlead' element={<SingleAd /> } />
        <Route path='/404not' element={<ErrorPage /> } />
        <Route path='/allads' element={<AllAds /> } />
        <Route path='/search' element={<Search /> } />
        <Route path='/singleblog' element={<SingleBlog /> } />
      </Routes>
    </Router>
  );
}

export default App;
