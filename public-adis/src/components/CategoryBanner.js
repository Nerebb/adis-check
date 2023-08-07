const CategoryBanner = () => {
    return (
        <div className="hero-homepage subpage">
        <div className="container wrapping-content">
          <div className="row">
            <div className="col-12 text-center">
              <div className="search_form search-adjust">
                <form className="row">
                  <div className="form-group col-lg-4 col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  <div className="form-group col-lg-4 col-sm-12">
                    <select className="form-control">
                      <option>All Categories</option>
                      <option>Cars</option>
                      <option>Properties</option>
                      <option>Jobs</option>
                      <option>Animals</option>
                      <option>Phone</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 col-sm-12">
                    <select className="form-control">
                      <option>Location</option>
                      <option>United Kingdom</option>
                      <option>Karachi</option>
                      <option>Japan</option>
                      <option>Australia</option>
                      <option>New York</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 col-sm-12">
                    <select className="filter-make filter form-control">
                      <option value="">Select Make</option>
                      <option value="">Show All</option>
                      <option value="">Honda</option>
                      <option value="">Toyota</option>
                      <option value="">Faw</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 col-sm-12">
                    <select className="filter-model filter form-control">
                      <option value="">Select Model</option>
                      <option value="">Show All</option>
                      <option value="">2010</option>
                      <option value="">2011</option>
                      <option value="">2012</option>
                      <option value="">2018</option>
                      <option value="">2019</option>
                      <option value="">Below 2010</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 col-sm-12">
                    <select
                      data-filter="type"
                      className="filter-type filter form-control"
                    >
                      <option value="">Select Type</option>
                      <option value="">Show All</option>
                      <option value="">Auto</option>
                      <option value="">Manual</option>
                      <option value="">Sports</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-12 col-sm-12">
                    <div id="rangeBox">
                      <div id="inputRange">
                        <div id="sliderBox" className="pricerange">
                          <div className="row">
                            <div className="col-12 zeropadd row margin_5px">
                              <p
                                className="col-xl-1 col-lg-1 showprice d-none d-sm-none d-md-none d-lg-block d-xl-block"
                              >
                                Price
                              </p>
                              <input
                                type="range"
                                id="slider0to50"
                                className="col-xl-9 col-lg-9 col-md-12"
                                step="5"
                                min="0"
                                max="50000"
                              />
                              <span
                                className="zeropadd col-xl-2 col-lg-2 col-md-12 row"
                              >
                                <i
                                  className="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2 fa fa-dollar"
                                ></i>
                                <input
                                  type="number"
                                  min="0"
                                  className="form-control col-xl-9 col-lg-9 col-md-10 col-sm-10 col-10"
                                  max="50000"
                                  placeholder="Min"
                                  id="min"
                                />
                              </span>
                            </div>
                            <div className="col-12 zeropadd row margin_5px">
                              <p
                                className="col-1 showprice d-none d-sm-none d-md-none d-lg-block d-xl-block"
                              >
                                Price
                              </p>
                              <input
                                type="range"
                                id="slider51to100"
                                className="col-xl-9 col-lg-9 col-md-12"
                                step="5"
                                min="50000"
                                max="1000000"
                              />
                              <span
                                className="zeropadd col-xl-2 col-lg-2 col-md-12 row"
                              >
                                <i
                                  className="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-2 fa fa-dollar"
                                ></i>
                                <input
                                  type="number"
                                  min="51"
                                  className="form-control col-xl-9 col-lg-9 col-md-10 col-sm-10 col-10"
                                  max="100"
                                  placeholder="Max"
                                  id="max"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-sm-12">
                    <button type="submit" className="custom-button">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CategoryBanner