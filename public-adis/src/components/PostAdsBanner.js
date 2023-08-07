import PostAdHero from "./PostAdHero";

const PostAdsBanner = () => {
    return (
        <div className="content blog">
            <PostAdHero />
            <div class="post-section blog">
                <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div class="container">
                        <div class="row">
                        <div class="container">
                            <div class="row">
                            <div class="col-lg-3">
                                <div class="widget">
                                <div class="rounded-circle customsize">
                                    <img
                                    src="img/logo_200x200.png"
                                    class="topupset"
                                    alt="logo"
                                    />
                                </div>
                                <div class="admin-box">
                                    <div class="user">
                                    <div class="username colorcodebage">
                                        <h3>Admin</h3>
                                    </div>
                                    </div>
                                    <nav class="navdashboard">
                                    <ul>
                                        <li>
                                        <a href="/dashboard">
                                            <i class="fa fa-dashboard"></i>
                                            <span>Dashboard</span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/myprofile">
                                            <i class="fa fa-user"></i>
                                            <span>My Profile</span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/myads">
                                            <span data-icon="V" class="icon"></span>
                                            <span>My Ads</span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#">
                                            <i class="fa fa-sign-out"></i>
                                            <span>Logout</span>
                                        </a>
                                        </li>
                                    </ul>
                                    </nav>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="col-sm-12 background_white">
                                <form method="post" class="row">
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold">Ad title</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Select Category</label
                                        >
                                        <select class="form-control">
                                        <option>Cars</option>
                                        <option>Properties</option>
                                        <option>Jobs</option>
                                        <option>Animals</option>
                                        <option>Phone</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Select Location Country</label
                                        >
                                        <select class="form-control">
                                        <option>United Kingdom</option>
                                        <option>Karachi</option>
                                        <option>Japan</option>
                                        <option>Australia</option>
                                        <option>New York</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Select Location State</label
                                        >
                                        <select class="form-control">
                                        <option>United Kingdom</option>
                                        <option>Karachi</option>
                                        <option>Japan</option>
                                        <option>Australia</option>
                                        <option>New York</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Location City</label
                                        >
                                        <select class="form-control">
                                        <option>United Kingdom</option>
                                        <option>Karachi</option>
                                        <option>Japan</option>
                                        <option>Australia</option>
                                        <option>New York</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Select Make</label
                                        >
                                        <select class="filter-make filter form-control">
                                        <option value="">Honda</option>
                                        <option value="">Toyota</option>
                                        <option value="">Faw</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Select Model</label
                                        >
                                        <select
                                        class="filter-model filter form-control"
                                        >
                                        <option value="">2010</option>
                                        <option value="">2011</option>
                                        <option value="">2012</option>
                                        <option value="">2018</option>
                                        <option value="">2019</option>
                                        <option value="">Below 2010</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Select Type</label
                                        >
                                        <select class="filter-type filter form-control">
                                        <option value="">Auto</option>
                                        <option value="">Manual</option>
                                        <option value="">Sports</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold">Price</label>
                                        <input
                                        type="text"
                                        class="form-control"
                                        value=""
                                        required=""
                                        />
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-6 col-xl-6 col-lg-6 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Condition</label
                                        >
                                        <div class="form-group marginforradio">
                                        <label for="id_new">New</label>
                                        <input
                                            type="radio"
                                            id="id_new"
                                            name="condition"
                                            value="n"
                                        />
                                        <label for="id_old">Old</label>
                                        <input
                                            type="radio"
                                            id="id_old"
                                            name="condition"
                                            value="o"
                                        />
                                        </div>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12"
                                    >
                                    <div class="form-group uploadingsmultiple">
                                        <label for="file">
                                        <span
                                            ><i class="fa fa-upload"></i> Upload
                                            Images</span
                                        >
                                        <input
                                            type="file"
                                            class="d-none"
                                            id="file"
                                            name="file[]"
                                            multiple=""
                                        />
                                        </label>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <label class="font-weight-bold"
                                        >Description</label
                                        >
                                        <textarea
                                        cols="50"
                                        class="sizetextarea col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12"
                                        ></textarea>
                                    </div>
                                    </div>
                                    <div
                                    class="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12"
                                    >
                                    <div class="form-group">
                                        <input
                                        type="submit"
                                        value="Update"
                                        class="custom-button"
                                        />
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PostAdsBanner