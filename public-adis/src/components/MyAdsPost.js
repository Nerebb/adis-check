import { useReducer } from "react";
import { useAuth } from "../context/authContext";
import { Widget } from "./constants/Widget";
import { fakeData } from "./MyProfileBlog";
import { LoadingCircle } from "./constants/LoadingCircle";
import { AdsCardTag } from "./constants/AdsCardTag";
import { NotFoundAds } from "./NotFoundAds";
import { Pagination } from "./Pagination";

const initState = {
  search: "",
  data: fakeData,
  isLoading: false,
};
const MyAdsPost = () => {
  const { user } = useAuth();
  const [myAds, setMyAds] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    initState
  );

  function handleSearch() {}

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
                        value={myAds.search}
                        onChange={(e) => setMyAds({ search: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 margin_10px">
                <div class="wrappingrow borderingnew d-sm-none d-xl-block d-lg-block d-md-none d-none">
                  <div class="row cardtag">
                    <div class="col-4">Title</div>
                    <div class="col-2">Ad Image</div>
                    <div class="col-2">Category</div>
                    <div class="col-2">Status</div>
                    <div class="col-2">Action</div>
                  </div>
                </div>
                {myAds.isLoading && (
                  <div
                    className="MyAdsPost-LoadingCircle"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <LoadingCircle width={40} height={40} color="#bb7fdb" />
                  </div>
                )}
                {!myAds.isLoading &&
                Array.isArray(myAds.data) &&
                myAds.data.length ? (
                  myAds.data.map(
                    (product) =>
                      product && (
                        <div key={product.id} className="wrappingrow">
                          <AdsCardTag {...product} />
                        </div>
                      )
                  )
                ) : (
                  <NotFoundAds />
                )}
              </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 margin_10px">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAdsPost;
