import Footer from "../Footer";
import HeroBanner from "../HeroBanner";
import Navbar from "../NavBar";
import PostSection from "../PostSection";
import HomeCategories from "../HomeCategories";
import Spinner from "../Spinner";
import NewsLetter from "../NewsLetter";
import axiosApi from "../../app/axiosApi";
import { useState, useEffect } from "react";
const Home = () => {
  const [dataCategories, setCategories] = useState([]);
  const [query, setQuery] = useState({
    categoryId: 0,
    q: "",
  });
  const [choosesCategory, setChoosesCategory] = useState(undefined);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosApi
      .getCategory()
      .then((data) => {
        setCategories(data.data);
      })
      .catch((error) => setCategories([]));
  }, []);

  useEffect(() => {
    axiosApi
      .getAdsBySearch({
        ...query,
      })
      .then((data) => {
        console.log();
        setProducts(data.data[0]);
      })
      .catch((error) => setProducts([]));
  }, [query]);

  useEffect(() => {
    if (choosesCategory) {
      axiosApi
        .getAdsByCategory(choosesCategory)
        .then((data) => {
          setProducts(data.data[0]);
        })
        .catch((error) => setProducts([]));
    }
  }, [choosesCategory]);

  return (
    <>
      <Spinner />
      <Navbar />
      <div className="content allads">
        {!!dataCategories.length && (
          <HeroBanner
            data={[
              { id: 0, category: "Todas las Categorias" },
              ...dataCategories.map((e) => ({
                id: e.id,
                category: e.category,
              })),
            ]}
            setQuery={setQuery}
          />
        )}

        <HomeCategories
          data={dataCategories}
          setChoosesCategory={setChoosesCategory}
        />

        <PostSection products={products} />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
