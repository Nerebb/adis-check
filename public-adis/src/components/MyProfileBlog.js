import { useEffect, useReducer } from "react";
import { useAuth } from "../context/authContext";
import { NotFoundAds } from "./NotFoundAds";
import { AdsCard } from "./constants/AdsCard";
import { LoadingCircle } from "./constants/LoadingCircle";
import { Widget } from "./constants/Widget";

export const fakeData = [
  {
    id: 1,
    img: "img/sport-3365503_640.jpg",
    name: "Iphone 64GB 6s Plus",
    category: "Phones",
    location: "London",
    price: "1600",
  },
  {
    id: 2,
    img: "img/books-1617327_640.jpg",
    name: "Books for rent",
    category: "Books",
    location: "Berlin",
    price: "5000",
  },
  {
    id: 3,
    img: "img/football-3471371_640.jpg",
    name: "Football New fifa",
    category: "Games",
    location: "Lahore",
    price: "10.0 M",
  },
  {
    id: 4,
    img: "img/bicycle-1209682_640.jpg",
    name: "Bicycle",
    category: "vehicle",
    location: "New York",
    price: "500.0 k",
  },
  {
    id: 5,
    img: "img/vegetables-1584999_640.jpg",
    name: "Fresh Food And ....",
    category: "Food",
    location: "Norway",
    price: "150.0 k",
  },
  {
    id: 6,
    img: "img/bmw-1313343_640.jpg",
    name: "New BMW For...",
    category: "Car",
    location: "Australia",
    price: "10.0 m",
  },
  {
    id: 7,
    img: "img/job-2860035_640.jpg",
    name: "We are hiring",
    category: "Jobs",
    location: "Pakistan",
    price: "...",
  },
  {
    id: 8,
    img: "img/home-office-336374_640.jpg",
    name: "Apple Mac 16gb",
    category: "Laptop",
    location: "Auckland",
    price: "500.0 k",
  },
  {
    id: 9,
    img: "img/monitor-1276949_640.jpg",
    name: "32' Lcd Tv",
    category: "LCD",
    location: "Paris",
    price: "2800",
  },
  {
    id: 10,
    img: "img/pug-801826_640.jpg",
    name: "Dog for adoption",
    category: "Animal",
    location: "Japan",
    price: "Free",
  },
  {
    id: 11,
    img: "img/rottweiler-1785760_640.jpg",
    name: "2 Pupies Inocent",
    category: "Dogs",
    location: "Turkey",
    price: "5.0 M",
  },
  {
    id: 12,
    img: "img/medical-563427_640.jpg",
    name: "Child Care Center",
    category: "Child Care",
    location: "Atlanta",
    price: "50.0 k",
  },
];

const initState = {
  search: "",
  data: fakeData,
  isLoading: false,
};

const MyProfileBlog = () => {
  const { user } = useAuth();
  const [myProfile, setMyProfile] = useReducer((prev, next) => {
    return { ...prev, ...next };
  }, initState);

  async function handleSearch() {}

  useEffect(() => {
    handleSearch();
  }, [myProfile.search]);

  // const searchDebounce = debounce(handleSearch, 700);

  return (
    <div class="post-section blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <Widget />
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-xl-12 col-lg-12">
                <div class="row margin_10px">
                  <div class="zeropadd col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <p>
                      14 ads by{" "}
                      <strong>{user.username ?? "PublicAdisThemes"}</strong>
                    </p>
                  </div>
                  <div class="zeropadd col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="widget widget_search">
                      <input
                        type="search"
                        class="form-control"
                        autocomplete="off"
                        name="s"
                        placeholder="Search..."
                        id="search-input"
                        value={myProfile.content}
                        onChange={(e) =>
                          setMyProfile({ search: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              {myProfile.isLoading && (
                <div
                  className="MyAdsProfile-LoadingCircle"
                  style={{ margin: "40px auto" }}
                >
                  <LoadingCircle width={40} height={40} color="#bb7fdb" />
                </div>
              )}
              {!myProfile.isLoading &&
              Array.isArray(myProfile.data) &&
              myProfile.data.length ? (
                myProfile.data.map(
                  (product) =>
                    product && (
                      <div
                        key={product.id}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px"
                      >
                        <AdsCard {...product} />
                      </div>
                    )
                )
              ) : (
                <NotFoundAds />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileBlog;
