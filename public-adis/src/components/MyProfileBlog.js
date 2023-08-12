import { useReducer } from "react";
import { useAuth } from "../context/authContext";
import { Widget } from "./constants/Widget";

const initState = {
  search: "",
  isSubmitting: false,
  message: "",
};

const MyProfileBlog = () => {
  const { user } = useAuth();
  const [searchByTitle, setSearchByTitle] = useReducer(() => {}, initState);

  function handleSearch(e) {
    e.preventDefault();
    setSearchByTitle(e.target.valaue);
    console.log("SEARCH-ADS", e.target.value);
  }

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
                      <form id="search-form" onSubmit={handleSearch}>
                        <input
                          type="search"
                          class="form-control"
                          autocomplete="off"
                          name="s"
                          placeholder="Search..."
                          id="search-input"
                          value=""
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/sport-3365503_640.jpg" alt="iphone" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Iphone 64GB 6s Plus</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Phones
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> London
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>1600
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/books-1617327_640.jpg" alt="books" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Books for rent</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Books
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Berlin
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>5000
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/football-3471371_640.jpg" alt="Footbal" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Football New fifa</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Games
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Lahore
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>10.0 M
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/bicycle-1209682_640.jpg" alt="bicycle" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Bicyle</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> vehicle
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> New York
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>500.0 k
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img
                        src="img/vegetables-1584999_640.jpg"
                        alt="vegetable"
                      />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Fresh Food And ....</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Food
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Norway
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>150.0 k
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/bmw-1313343_640.jpg" alt="Car" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">New BMW For...</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Car
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i>Australia
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>10.0 m
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/job-2860035_640.jpg" alt="Footbal" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">we are hiring</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Jobs
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Pakistan
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>...
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/home-office-336374_640.jpg" alt="laptop" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Apple Mac 16gb..</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Laptop
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Auckland
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>500.0 k
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/monitor-1276949_640.jpg" alt="Montior" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">32" Lcd Tv</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> LCD
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Paris
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>2800
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/pug-801826_640.jpg" alt="dog" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Dog for adoption</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Animal
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Japan
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>Free
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/rottweiler-1785760_640.jpg" alt="pupies" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">2 Pupies Inocent</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        {" "}
                        <i class="fa fa-list-alt"></i> Dogs
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Turkey
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>5.0 M
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div class="post-box">
                  <div class="thumbnail-holder">
                    <a href="/product">
                      <img src="img/medical-563427_640.jpg" alt="doc" />
                    </a>
                  </div>
                  <div class="post-box-content">
                    <h3>
                      <a href="#">Child Care Center</a>
                    </h3>

                    <div class="post-category">
                      <a href="#">
                        <i class="fa fa-list-alt"></i> Child Care
                      </a>
                    </div>
                    <div class="post-location">
                      <a href="#">
                        <i class="fa fa-location-arrow"></i> Atlanta
                      </a>
                    </div>
                    <div class="post-meta">
                      <i class="fa fa-dollar"></i>50.0 k
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 margin_10px">
                <nav aria-label="Page navigation">
                  <ul class="pagination justify-content-center flex-wrap">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        Previous
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link active-pagination" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        93
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        94
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        95
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileBlog;
