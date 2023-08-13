import { useAuth } from "../context/authContext";
import { Widget } from "./constants/Widget";
import { DashboardForm } from "./formikForms/DashboardForm";

const DashboardPost = () => {
  return (
    <div class="post-section blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <Widget />
          </div>
          <div class="col-lg-9">
            <div class="col-sm-12 background_white">
              <DashboardForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPost;
