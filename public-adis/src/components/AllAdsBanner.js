import React, { useState } from "react";

const AllAdsBanner = () => {
    const [categories] = useState([
        {
          id: 1,
          imgSrc: "img/sport-3365503_640.jpg",
          name: "Iphone 64GB 6s Plus",
          category: "Phones",
          location: "London",
          price: "1600"
        },
        {
          id: 2,
          imgSrc: "img/books-1617327_640.jpg",
          name: "Books for rent",
          category: "Books",
          location: "Berlin",
          price: "5000"
        },
        {
          id: 3,
          imgSrc: "img/football-3471371_640.jpg",
          name: "Football New fifa",
          category: "Games",
          location: "Lahore",
          price: "10.0 M"
        },
        
        {
          id: 4,
          imgSrc: "img/bicycle-1209682_640.jpg",
          name: "Bicycle",
          category: "Vehicle",
          location: "New York",
          price: "500.0 k"
        },
        {
          id: 5,
          imgSrc: "img/vegetables-1584999_640.jpg",
          name: "Fresh Food And ....",
          category: "Food",
          location: "Norway",
          price: "150.0 k"
        },
        {
          id: 6,
          imgSrc: "img/bmw-1313343_640.jpg",
          name: "New BMW For...",
          category: "Car",
          location: "Australia",
          price: "10.0 m"
        },
        {
          id: 7,
          imgSrc: "img/job-2860035_640.jpg",
          name: "We are hiring",
          category: "Jobs",
          location: "Pakistan",
          price: "..."
        },
        {
          id: 8,
          imgSrc: "img/home-office-336374_640.jpg",
          name: "Apple Mac 16gb..",
          category: "Laptop",
          location: "Auckland",
          price: "500.0 k"
        },
        {
          id: 9,
          imgSrc: "img/monitor-1276949_640.jpg",
          name: "32' Lcd Tv",
          category: "LCD",
          location: "Paris",
          price: "2800"
        },
        {
          id: 10,
          imgSrc: "img/pug-801826_640.jpg",
          name: "Dog for adoption",
          category: "Animal",
          location: "Japan",
          price: "Free"
        },
        {
          id: 11,
          imgSrc: "img/rottweiler-1785760_640.jpg",
          name: "2 Pupies Inocent",
          category: "Dogs",
          location: "Turkey",
          price: "5.0 M"
        },
        {
          id: 12,
          imgSrc: "img/medical-563427_640.jpg",
          name: "Child Care Center",
          category: "Child Care",
          location: "Atlanta",
          price: "50.0 k"
        },
      ]);
    
      const [currentPage, setCurrentPage] = useState(1);
    
      const itemsPerPage = 3; // Number of items to show per page
      const startIndex = (currentPage - 1) * itemsPerPage;
      const visibleCategories = categories.slice(startIndex, startIndex + itemsPerPage);
    
      return (
        <div className="post-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">All Ads</li>
                  </ol>
                </nav>
                <h2 className="styleh2 karma text-center">Latest Ads</h2>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-9 col-sm-12">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                      <p>14,185 ads in <strong>United States Of America</strong></p>
                    </div>
                  {visibleCategories.map((category) => (
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 margin_10px" key={category.id}>
                      <div className="post-box">
                        <div className="thumbnail-holder">
                          <a href="/product">
                            <img src={category.imgSrc} alt={category.name} />
                          </a>
                        </div>
                        <div className="post-box-content">
                          <h3><a href="#">{category.name}</a></h3>
                          <div className="post-category">
                            <a href="#"><i className="fa fa-list-alt"></i> {category.category}</a>
                          </div>
                          <div className="post-location">
                            <a href="#"><i className="fa fa-location-arrow"></i> {category.location}</a>
                          </div>
                          <div className="post-meta">
                            <i className="fa fa-dollar"></i>{category.price}
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 margin_10px">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center flex-wrap">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <a
                        className="page-link"
                        href="#"
                        tabIndex="-1"
                        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                      >
                        Previous
                      </a>
                    </li>
                    {/* Generate pagination numbers */}
                    {Array.from({ length: Math.ceil(categories.length / itemsPerPage) }, (_, index) => index + 1).map((pageNum) => (
                      <li className={`page-item ${currentPage === pageNum ? "active" : ""}`} key={pageNum}>
                        <a
                          className="page-link"
                          href="#"
                          onClick={() => setCurrentPage(pageNum)}
                        >
                          {pageNum}
                        </a>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === Math.ceil(categories.length / itemsPerPage) ? "disabled" : ""}`}>
                      <a
                        className="page-link"
                        href="#"
                        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AllAdsBanner