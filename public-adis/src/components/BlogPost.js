import React, { useState } from "react";

const BlogPost = () => {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Daily riding Bicycle",
      image: "img/bicycle-1209682_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 2,
      title: "Daily riding Bicycle",
      image: "img/bicycle-1209682_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 3,
      title: "Bmw is Cool Car",
      image: "img/bmw-1313343_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 4,
      title: "We Read Books",
      image: "img/books-1617327_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 5,
      title: "Doctor Doctor h..",
      image: "img/medical-563427_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 6,
      title: "Good Dog",
      image: "img/pug-801826_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 7,
      title: "Sports is Fi...",
      image: "img/sport-3365503_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 8,
      title: "Eat Vegetabale..",
      image: "img/vegetables-1584999_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 9,
      title: "Football Game",
      image: "img/football-3471371_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 10,
      title: "Office Working",
      image: "img/home-office-336374_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 11,
      title: "We are offering",
      image: "img/job-2860035_640.jpg",
      author: "Author",
      views: "25 views",
    },
    {
      id: 12,
      title: "Love Animals",
      image: "img/hedgehog-468228_640.jpg",
      author: "Author",
      views: "25 views",
    },
  ]);

  return (
    <div className="post-section aboutus">
      <div className="container">
        <div className="masonry mansoryitem">
          {blogPosts.map((post) => (
            <div className="item" key={post.id}>
              <a href="singleblog">
                <p>{post.title}</p>
              </a>
              <a href="#">
                <img alt="blog" src={post.image} />
              </a>

              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-user" aria-hidden="true"></i> {post.author}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-eye" aria-hidden="true"></i> {post.views}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 margin_10px">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center flex-wrap">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link active-pagination" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item"><a class="page-link" href="#">93</a></li>
            <li class="page-item"><a class="page-link" href="#">94</a></li>
            <li class="page-item"><a class="page-link" href="#">95</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogPost;