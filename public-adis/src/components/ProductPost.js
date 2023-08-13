const ProductPost = ({ product }) => {
  return (
    <div class="post-section blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Products
                </li>
              </ol>
            </nav>
            <h2 class="styleh2 karma margin_10px">{product?.ad_title}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-12 col-xs-12">
            <div
              id="productcarosal"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner height-adjust">
                {product?.images.map((value, i) => {
                  if (i === 0) {
                    return (
                      <div class="carousel-item active" key={i}>
                        <img
                          class="d-block w-100"
                          src={value}
                          alt="First slide"
                        />
                      </div>
                    );
                  }
                  return (
                    <div class="carousel-item" key={i}>
                      <img
                        class="d-block w-100"
                        src={value}
                        alt="Second slide"
                      />
                    </div>
                  );
                })}

                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    src="img/bmw-1313343_640.jpg"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="img/bmw-1313343_640.jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    src="img/bicycle-1209682_640.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev coloring"
                href="#productcarosal"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next coloring"
                href="#productcarosal"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-xs-12 first-height">
            <div class="boxwedigt margin_10px">
              <div class="text-center">
                <h4>
                  <i class="fa fa-dollar"></i>
                  <span class="karma">{product?.price}</span>
                </h4>

                <p class="margin_10px">
                  <a href="#">
                    <i class="fa fa-list-alt"></i>
                    {product?.category_name}
                  </a>
                </p>
                <div class="share-items">
                  <div class="meta">
                    <a href="#">
                      <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="boxwedigt margin_10px">
              <div class="text-center">
                <h4>
                  <a href="#">
                    <i class="fa fa-user"></i>
                    <span class="karma">PublicAdisThems</span>
                  </a>
                </h4>
                <img
                  src="img/logo.png"
                  class="rounded-circle square-height max-width-50px margin_10px"
                />
                <div class="clearfix"></div>
                <a class="custom-button">
                  <i class="fa fa-send"></i> Chat With Seller
                </a>
                <p class="margin_10px mb-0">
                  <a href="tel:#">
                    <strong>
                      <i class="fa fa-phone"></i> {product?.phone}
                    </strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-12 col-xs-12">
            <div class="post-content-wrapper bg-white">
              <div class="entry-summary boxwedigt">
                <div class="row">
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Country</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">{product?.country}</a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>State</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">{product?.state}</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Make</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">{product?.make || ""}</a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Model</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">{product?.model || ""}</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Year</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">2016</a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Condition</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">{product?.condition || ""}</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Transmission</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">{product?.type || ""}</a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Registered</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">Yes</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Down Payment</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#"> 210,000</a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">
                      <strong>Monthly Installment</strong>
                    </a>
                  </div>
                  <div class="col-sm-3 col-6 col-md-3">
                    <a href="#">9766</a>
                  </div>
                </div>
              </div>
              <div class="entry-summary">
                {product?.description}
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi qui fuga quam hic possimus nihil iure assumenda odio
                  at reprehenderit magni debitis cupiditate quidem nobis
                  <strong>Helvetica</strong> repellendus doloribus, rerum aut
                  in! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias repellat autem accusantium cupiditate animi
                  consectetur. Beatae quia labore, sunt fugit accusantium.
                  Deleniti excepturi ducimus error, ipsam voluptates eius sint
                  odio!
                </p>
                <p>
                  Lorem ipsum dolor sit amet,
                  <strong>consectetuer</strong> adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat. Duis autem vel eum iriure dolor in
                  hendrerit in vulputate velit esse molestie consequat, vel
                  illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi. Nam
                  liber tempor cum soluta nobis eleifend option congue nihil
                  imperdiet doming id quod mazim placerat facer possim assum.
                  Typi non habent claritatem insitam; est usus legentis in iis
                  qui facit eorum claritatem.
                  <strong>Investigationes</strong> demonstraverunt lectores
                  legere me lius quod ii legunt saepius. Claritas est etiam
                  processus dynamicus, qui sequitur mutationem consuetudium
                  lectorum. Mirum est notare quam littera gothica, quam nunc
                  putamus parum claram
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat.
                </p> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 col-xs-12">
            <div class="category-container">
              <h2 class="text-center styleh2 karma">
                <a class="greens" href="#">
                  Recent Ads
                </a>
              </h2>
              <ul class="posts-list recentadsright">
                <li class="row">
                  <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                    <a href="#">
                      <img src="img/pug-801826_640.jpg" alt="" />
                    </a>
                  </div>
                  <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                    <a href="#">Eum Iriure Dolor Du..</a>
                    <span class="col-6">
                      <i class="fa fa-list-alt"></i>Books
                    </span>
                    <span class="col-6">
                      <i class="fa fa-dollar"></i>25,000
                    </span>
                  </div>
                </li>
                <li class="row">
                  <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                    <a href="#">
                      <img src="img/vegetables-1584999_640.jpg" alt="" />
                    </a>
                  </div>
                  <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                    <a href="#">Consectetuer Adipisci..</a>
                    <span class="col-6">
                      <i class="fa fa-list-alt"></i>Cars
                    </span>
                    <span class="col-6">
                      <i class="fa fa-dollar"></i>21,000
                    </span>
                  </div>
                </li>
                <li class="row">
                  <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                    <a href="#">
                      <img src="img/home-office-336374_640.jpg" alt="" />
                    </a>
                  </div>
                  <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                    <a href="#">Consectetuer Exercitati..</a>
                    <span class="col-6">
                      <i class="fa fa-list-alt"></i>Property
                    </span>
                    <span class="col-6">
                      <i class="fa fa-dollar"></i>21,000K
                    </span>
                  </div>
                </li>
                <li class="row">
                  <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                    <a href="#">
                      <img src="img/bicycle-1209682_640.jpg" alt="" />
                    </a>
                  </div>
                  <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                    <a href="#">Consectetuer Exercitati..</a>
                    <span class="col-6">
                      <i class="fa fa-list-alt"></i>Property
                    </span>
                    <span class="col-6">
                      <i class="fa fa-dollar"></i>50.0M
                    </span>
                  </div>
                </li>

                <li class="row">
                  <div class="widget-thumb col-sm-4 col-lg-4 col-md-4 col-xl-4 col-12">
                    <a href="#">
                      <img src="img/hedgehog-468228_640.jpg" alt="" />
                    </a>
                  </div>
                  <div class="widget-content col-sm-8 col-lg-8 col-md-8 col-xl-8 col-12">
                    <a href="#">Exercitation Adipisc..</a>
                    <span class="col-6">
                      <i class="fa fa-list-alt"></i>NGO
                    </span>
                    <span class="col-6">
                      <i class="fa fa-dollar"></i>Free
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPost;
