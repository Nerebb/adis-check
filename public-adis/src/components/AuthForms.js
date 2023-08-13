import { useReducer } from "react";
import axiosApi from "../app/axiosApi";
import { checkEmail } from "../validation/auth.validation";
import { LoadingCircle } from "./constants/LoadingCircle";
import SignInForm from "./formikForms/SignInForm";
import { SignUpForm } from "./formikForms/SignUpForm";

const initFormData = {
  //Input field
  email: "facedev1806@gmail.com",

  //RecoverPasswordForm
  recoverEmail: "",
  recoverEmailErr: "",

  //Alternative Field
  isSubmitting: false,
  message: "",
};

const AuthForms = () => {
  const [formData, setFormData] = useReducer((prevState, nextState) => {
    //Validation if need
    if (nextState.recoverEmail) {
      try {
        const email = checkEmail.validateSync(nextState.recoverEmail);
        if (email) nextState.recoverEmailErr = undefined;
      } catch (error) {
        nextState.recoverEmailErr = error.message ?? "Invalid email";
      }
    }
    return { ...prevState, ...nextState };
  }, initFormData);

  async function submitForgotPassword(event) {
    event.preventDefault();
    if (formData.recoverEmailErr) return;
    else setFormData({ isSubmitting: true, recoverEmailErr: "", message: "" });

    //Debounce
    await new Promise((_) => setTimeout(_, 2000));

    try {
      //Validate
      const email = checkEmail.validateSync(formData.recoverEmail);

      //Request Database
      await axiosApi.recover(email);

      //Response
      setFormData({
        ...initFormData,
        message: "Password has been sent to your registered email",
      });
    } catch (err) {
      setFormData({
        isSubmitting: false,
        message:
          err.message ??
          "ForgotPassword: Unknown error occurred - Please try again",
      });
    }
  }

  function backToLogin() {
    if (formData.recoverEmailErr) return;
    else
      setFormData({ email: formData.recoverEmail, recoverEmailErr: undefined });
  }

  return (
    <div class="post-section aboutus registerlogin">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="container formcustom">
              <div class="col-sm-12 col-md-12 col-xl-10 col-lg-10 ml-auto mr-auto">
                <ul
                  class="nav nav-pills nav-fill mb-1"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item col-6">
                    <a
                      class="custom-button phill active"
                      id="pills-signin-tab"
                      data-toggle="pill"
                      href="#pills-signin"
                      role="tab"
                      aria-controls="pills-signin"
                      aria-selected="true"
                      onClick={() => setFormData(initFormData)}
                    >
                      Login
                    </a>
                  </li>
                  <li class="nav-item col-6">
                    <a
                      class="custom-button phill"
                      id="pills-signup-tab"
                      data-toggle="pill"
                      href="#pills-signup"
                      role="tab"
                      aria-controls="pills-signup"
                      aria-selected="false"
                      onClick={() => setFormData(initFormData)}
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-signin"
                    role="tabpanel"
                    aria-labelledby="pills-signin-tab"
                  >
                    <div class="col-sm-12">
                      <SignInForm email={formData.email} />
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-signup"
                    role="tabpanel"
                    aria-labelledby="pills-signup-tab"
                  >
                    <div class="col-sm-12">
                      <SignUpForm />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id="forgotPass"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <form id="forgotpassForm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Forgot Password</h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label>
                            Email <span class="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="forgotemail"
                            id="forgotemail"
                            class="form-control"
                            placeholder="Enter your valid email..."
                            value={formData.recoverEmail}
                            onChange={(e) =>
                              setFormData({
                                recoverEmail: e.target.value,
                              })
                            }
                          />
                          {formData.recoverEmailErr && (
                            <div className="text-danger cap-first-letter">
                              {formData.recoverEmailErr}
                            </div>
                          )}
                          {formData.message && (
                            <div
                              class="text-danger cap-first-letter"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                marginTop: 10,
                              }}
                            >
                              {formData.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="custom-button"
                          data-dismiss={formData.recoverEmailErr ? "" : "modal"}
                          disabled={formData.isSubmitting}
                          onClick={backToLogin}
                        >
                          Sign In
                        </button>
                        <button
                          type="submit"
                          name="forgotPass"
                          class="custom-button"
                          onClick={submitForgotPassword}
                          disabled={formData.isSubmitting}
                        >
                          {formData.isSubmitting ? (
                            <LoadingCircle />
                          ) : (
                            <>
                              <i class="fa fa-envelope"></i>
                              Send Request
                            </>
                          )}
                        </button>
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
  );
};

export default AuthForms;
