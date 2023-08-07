import React, { useState } from "react";
const SingleBlogPost = () => {
    const [categories] = useState([
        {
          icon: "maida-laptop",
          text: "Laptops",
        },
        {
          icon: "maida-briefcase",
          text: "Jobs",
        },
        {
          icon: "maida-t-shirt",
          text: "Garments",
        },
        {
          icon: "maida-car-1",
          text: "Cars",
        },
        {
          icon: "maida-calculator",
          text: "Auditors",
        },
        {
          icon: "maida-zoo",
          text: "Animals", 
        },
        {
          icon: "maida-town-hall",
          text: "Finance",
        },
        {
          icon: "maida-art-gallery",
          text: "Art",
        },
        {
            icon: "maida-fast-food",
            text: "Food"
        },
        {
          icon: "maida-bar",
          text: "Club",
        },
        {
          icon: "maida-delivery-transport-2",
          text: "Logistics",
        },
        {
          icon: "maida-display",
          text: "Electronics",
        },
        {
            icon: "maida-cup",
            text: "Cafe",     
        },
        {
          icon: "maida-case-medic",
          text: "Doctors",
        },
        {
          icon: "fa-film",
          text: "Entertainment",
        },
        {
          icon: "maida-soccer",
          text: "Games",
        },
        {
          icon: "maida-phone",
          text: "Phones",
        }
      ]);
    return (
        <div class="post-section blog">
            <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-xs-12">
                    <div class="blog-post details">
                        <div class="post-thumb">
                            <img class="img-fluid" src="img/books-1617327_640.jpg" alt="" />
                        </div>
                        <div class="post-content-wrapper">
                            <h2> Eum Iriure Dolor Duis Autem </h2>
                            <div class="meta">
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i> PublicAdisThemes</a>
                                <a href="#"><i class="fa fa-calendar"></i> Sep. 29, 2019</a>
                                <a href="#"><i class="fa fa-star" aria-hidden="true"></i> Important</a>
                                <a href="#"><i class="fa fa-comment" aria-hidden="true"></i> Comments</a>
                            </div>
                            <div class="entry-summary">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi qui fuga quam hic
                                possimus nihil iure assumenda odio at reprehenderit magni debitis cupiditate quidem nobis
                                <strong>Helvetica</strong> repellendus doloribus, rerum aut in! Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Molestias repellat autem accusantium cupiditate animi
                                consectetur. Beatae quia labore, sunt fugit accusantium. Deleniti excepturi ducimus error,
                                ipsam voluptates eius sint odio!</p>
                                <p>Lorem ipsum dolor sit amet, <strong>consectetuer</strong> adipiscing elit, sed diam nonummy
                                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                                molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
                                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                                feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil
                                imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem
                                insitam; est usus legentis in iis qui facit eorum claritatem.
                                <strong>Investigationes</strong> demonstraverunt lectores legere me lius quod ii legunt
                                saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                consequat.</p>
                                <div class="share-items">
                                <div class="meta">
                                    <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i> </a>
                                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i> </a>
                                </div>
                                </div>


                                <div class="comment-box">
                                <h3>Comments</h3>
                                <ol class="comments-list">
                                    <li>
                                    <div class="media bglighter">
                                        <div class="thumb-left">
                                        <a href="#">
                                            <img class="img-fluid rounded-circle max-width-60px" src="img/logo.png" alt="" />
                                        </a>
                                        </div>
                                        <div class="info-body">
                                        <div class="media-heading">
                                            <h4 class="name">PublicAdisThems</h4>
                                            <span class="comment-date">
                                                            <i class="fa fa-clock-o"></i> June 29, 2019</span>
                                            <a href="#" class="reply-link"><i class="fa fa-reply"></i> Reply</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nemo ipsam
                                            eum
                                            illo minus voluptatibus ipsa nulla, perferendis aliquid aperiam beatae nihil
                                            sapiente
                                            eaque atque nesciunt perspiciatis ex saepe, quibusdam..</p>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                        <div class="media bglighter-2">
                                            <div class="thumb-left">
                                            <a href="#">
                                                <img class="img-fluid rounded-circle max-width-60px" src="img/logo.png"
                                                    alt="" />
                                            </a>
                                            </div>
                                            <div class="info-body">
                                            <div class="media-heading">
                                                <h4 class="name">PublicAdisThems</h4>
                                                <span class="comment-date">
                                                            <i class="fa fa-clock-o"></i> June 29, 2019</span>
                                                <a href="#" class="reply-link"><i class="fa fa-reply"></i> Reply</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nemo
                                                ipsam
                                                eum illo minus voluptatibus ipsa nulla, perferendis aliquid aperiam beatae
                                                nihil
                                                sapiente eaque atque nesciunt perspiciatis ex saepe, quibusdam..</p>
                                            </div>
                                        </div>
                                        </li>
                                    </ul>
                                    </li>
                                    <li>
                                    <div class="media bglighter">
                                        <div class="thumb-left">
                                        <a href="#">
                                            <img class="img-fluid rounded-circle max-width-60px" src="img/logo.png" alt="" />
                                        </a>
                                        </div>
                                        <div class="info-body">
                                        <div class="media-heading">
                                            <h4 class="name">PublicAdisThems</h4>
                                            <span class="comment-date">
                                                            <i class="fa fa-clock-o"></i> June 29, 2019</span>
                                            <a href="#" class="reply-link"><i class="fa fa-reply"></i> Reply</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nemo ipsam
                                            eum
                                            illo minus voluptatibus ipsa nulla, perferendis aliquid aperiam beatae nihil
                                            sapiente
                                            eaque atque nesciunt perspiciatis ex saepe, quibusdam..</p>
                                        </div>
                                    </div>
                                    </li>
                                </ol>

                                <div id="respond">
                                    <h2 class="respond-title">Leave A Comment</h2>
                                    <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <input id="author" class="form-control" name="author" type="text" value=""
                                                size="30"
                                                placeholder="Your Name" />
                                        </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-xs-12">
                                        <div class="form-group">
                                            <input id="email" class="form-control" name="author" type="text" value=""
                                                size="30"
                                                placeholder="Your E-Mail" />
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12col-xs-12">
                                        <div class="form-group">
                                                <textarea id="comment" class="form-control" name="comment" cols="45" rows="8"
                                                            placeholder="Massage..."></textarea>
                                        </div>
                                        <button type="submit" id="submit" class="custom-button">Post Comment</button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div class="m-10">
                                    <div class="page-item float-left">
                                    <a class="page-link" href="#" tabindex="-1">Previous Post</a>
                                    </div>
                                    <div class="page-item float-right">
                                    <a class="page-link" href="#">Next Post</a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <aside id="sidebar" class="col-lg-4 col-md-12 col-xs-12 right-sidebar">

                <div class="widget widget_search">
                    <form id="search-form">
                    <input type="search" class="form-control" autocomplete="off" name="s" placeholder="Search..." id="search-input" value="" />
                    <button type="submit" class="custom-button m-10"><i class="fa fa-search"></i>
                    </button>
                    </form>
                </div>

                <div class="category-container">
                    <div class="">
                    <h2 class="text-center styleh2 karma"><a class="greens" href="#">Categories</a></h2>
                    <div class="cat-icons">
                        {categories.map((category, index) => (
                            <a href="#" key={index}>
                            <div className={`mainicon icon ${category.icon}`}>
                                <span className="text-icon">{category.text}</span>
                            </div>
                            </a>
                        ))}          
                        <div class="clearfix"></div>
                    </div>
                    </div>
                </div>

                <div class="category-container">
                    <h2 class="text-center styleh2 karma"><a class="greens" href="#">Recent Post</a></h2>
                    <ul class="posts-list">
                    <li class="row">
                        <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                        <a href="#"><img src="img/pug-801826_640.jpg" alt="" /></a>
                        </div>
                        <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                        <a href="#">Eum Iriure Dolor Du..</a>
                        <span><i class="fa fa-calendar"></i>June 21, 2018</span>
                        </div>
                    </li>
                    <li class="row">
                        <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                        <a href="#"><img src="img/vegetables-1584999_640.jpg" alt="" /></a>
                        </div>
                        <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                        <a href="#">Consectetuer Adipisci..</a>
                        <span><i class="fa fa-calendar"></i>June 21, 2018</span>
                        </div>
                    </li>
                    <li class="row">
                        <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                        <a href="#"><img src="img/home-office-336374_640.jpg" alt="" /></a>
                        </div>
                        <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                        <a href="#">Et Leggings Fanny..</a>
                        <span><i class="fa fa-calendar"></i>June 21, 2018</span>
                        </div>
                    </li>
                    <li class="row">
                        <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                        <a href="#"><img src="img/bicycle-1209682_640.jpg" alt="" /></a>
                        </div>
                        <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                        <a href="#">Consectetuer Exercitati..</a>
                        <span><i class="fa fa-calendar"></i>June 21, 2018</span>
                        </div>
                    </li>

                    <li class="row">
                        <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                        <a href="#"><img src="img/hedgehog-468228_640.jpg" alt="" /></a>
                        </div>
                        <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                        <a href="#">Exercitation Adipisc..</a>
                        <span><i class="fa fa-calendar"></i>June 21, 2018</span>
                        </div>
                    </li>

                    </ul>
                </div>


                <div class="category-container">
                    <h2 class="text-center styleh2 karma"><a class="greens" href="#">Advertisement</a></h2>
                    <div class="add-box">
                    <img src="img/ad-blog.png" alt="" />
                    </div>
                </div>
                </aside>
            </div>
        </div>
    </div>
    )
}

export default SingleBlogPost