import { useSearchParams } from "react-router-dom";
import Footer from "../Footer";
import { Navbar2 } from "../NavBar";
import { NewsLetter2 } from "../NewsLetter";
import ProductBanner from "../ProductBanner";
import ProductPost from "../ProductPost";
import { useEffect, useState } from "react";
import axiosApi from "../../app/axiosApi";

const Product = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("id");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!product) {
      axiosApi
        .getDetail(categoryId)
        .then((data) => setProduct(data.data))
        .catch(() => setProduct(null));
    }
  }, [categoryId]);

  return (
    <>
      <Navbar2 />
      <div className="content blog">
        <ProductBanner />
        <ProductPost product={product} />
      </div>
      <NewsLetter2 />
      <Footer />
    </>
  );
};

export default Product;
