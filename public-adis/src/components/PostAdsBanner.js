import PostAdHero from "./PostAdHero";
import { Widget } from "./constants/Widget";
import { PostAdsForm } from "./formikForms/PostAdsForm";

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
                        <Widget />
                      </div>
                      <div class="col-lg-9">
                        <div class="col-sm-12 background_white">
                          <PostAdsForm />
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
  );
};

export default PostAdsBanner;
