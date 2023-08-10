import { useReducer } from "react";
import axiosApi from "../app/axiosApi";

const initFormData = {
  //Input field
  email: "facedev1806@gmail.com",
  password: "password",
  confirmPassword: undefined,
  username: undefined,
  phone: undefined,

  //Alternative Field
  isLoading: false,
  message: undefined,
  rememberme: false,
  termsAndConditions: false,
};

const AuthForms = () => {
  const [formData, setFormData] = useReducer((prevState, nextState) => {
    //Validation if need

    //Alert if there any message found
    if (nextState.message) {
      const { message, ...otherInputs } = nextState;
      alert(message);
      return { ...prevState, ...otherInputs };
    }
    return { ...prevState, ...nextState };
  }, initFormData);

  async function submitSignIn(event) {
    event.preventDefault();
    setFormData({ isLoading: true });
    //Debounce
    await new Promise((_) => setTimeout(_, 500));
    try {
      //Request database
      const data = await axiosApi.login({
        email: formData.email,
        password: formData.password,
      });

      //Response
      if (data) setFormData({ ...initFormData, message: "Login successfully" });
    } catch (err) {
      setFormData({
        isLoading: false,
        message: err.message ?? "AuthLogin: Unknown error",
      });
    }
  }

  async function submitSignUp(event) {
    event.preventDefault();
    //Debounce
    await new Promise((_) => setTimeout(_, 500));
    setFormData({ isLoading: true });
    try {
      //Validate field recheck (Field already checked in input pattern)
      if (!formData.termsAndConditions) {
        return setFormData({
          isLoading: false,
          message: "Please accept the terms and conditions",
        });
      }
      if (!(formData.email && formData.username && formData.password))
        return setFormData({
          isLoading: false,
          message: "SignUp: Some fields are Invalid",
        });

      //Request Database
      const newUser = await axiosApi.register({
        email: formData.email,
        username: formData.username,
        phone: formData.phone,
        password: formData.password,
      });

      //Response
      if (newUser)
        setFormData({ ...initFormData, message: "User signup successfully" });
    } catch (err) {
      setFormData({
        isLoading: false,
        message: err.message ?? "Signup: Unknown error",
      });
    }
  }

  async function submitForgotPassword(event) {
    event.preventDefault();
    //Debounce
    await new Promise((_) => setTimeout(_, 500));
    try {
      //Request Database
      const sentMail = await axiosApi.recover(formData.email);

      //Response
      return setFormData({
        ...initFormData,
        message: "Password has been sent to your registered email",
      });
    } catch (err) {
      setFormData({
        isLoading: false,
        message:
          err.message ??
          "ForgotPassword: Unknown error occurred - Please try again",
      });
    }
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
                      <form
                        // method="post"
                        id="singninFrom"
                        onSubmit={submitSignIn}
                      >
                        <div class="form-group">
                          <label class="font-weight-bold">
                            Email <span class="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            class="form-control"
                            placeholder="Enter valid email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ email: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label class="font-weight-bold">
                            Password
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            class="form-control"
                            placeholder="***********"
                            value={formData.password}
                            onChange={(e) =>
                              setFormData({ password: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                              <label>
                                <input
                                  type="checkbox"
                                  name="condition"
                                  id="condition"
                                  onChange={(e) =>
                                    setFormData({
                                      rememberme: e.target.checked,
                                    })
                                  }
                                />
                                Remember me.
                              </label>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-6 text-left text-sm-right text-lg-right text-md-right text-xl-right">
                              <a
                                href="javascript:;"
                                data-toggle="modal"
                                data-target="#forgotPass"
                                onClick={() => setFormData(initFormData)}
                              >
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <input
                            type="submit"
                            name="submit"
                            value="Sign In"
                            class="custom-button"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-signup"
                    role="tabpanel"
                    aria-labelledby="pills-signup-tab"
                  >
                    <div class="col-sm-12">
                      <form method="post" id="singnupFrom">
                        <div class="form-group">
                          <label class="font-weight-bold">
                            Email <span class="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            id="signupemail"
                            class="form-control"
                            placeholder="Enter valid email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ email: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label class="font-weight-bold">
                            User Name
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="signupusername"
                            class="form-control"
                            placeholder="Choose your user name"
                            value={formData.username}
                            onChange={(e) =>
                              setFormData({ username: e.target.value })
                            }
                            required
                          />
                          <div class="text-danger">
                            <em>This will be your login name!</em>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="font-weight-bold">Phone #</label>
                          <input
                            type="text"
                            id="signupphone"
                            class="form-control"
                            placeholder="(000)-(0000000)"
                            pattern="[0-9]{10}"
                            title="Ten digits code"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ phone: e.target.value });
                            }}
                          />
                        </div>
                        <div class="form-group">
                          <label class="font-weight-bold">
                            Password
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            id="signuppassword"
                            class="form-control"
                            placeholder="***********"
                            pattern="^\S{6,}$"
                            onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.password_two.pattern = this.value;"
                            onChange={(e) =>
                              setFormData({ password: e.target.value })
                            }
                            value={formData.password}
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label class="font-weight-bold">
                            Confirm Password
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            name="signupcpassword"
                            id="signupcpassword"
                            class="form-control"
                            pattern="^\S{6,}$"
                            onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');"
                            onChange={(e) =>
                              setFormData({ confirmPassword: e.target.value })
                            }
                            value={formData.confirmPassword}
                            placeholder="***********"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label>
                            <input
                              type="checkbox"
                              name="signupcondition"
                              id="signupcondition"
                              onChange={(e) =>
                                setFormData({
                                  termsAndConditions: e.target.checked,
                                })
                              }
                              required
                            />
                            I agree with the
                            <a href="javascript:;">Terms &amp; Conditions</a>
                            for Registration.
                          </label>
                        </div>
                        <div class="form-group">
                          <input
                            type="submit"
                            name="signupsubmit"
                            value="Sign Up"
                            class="custom-button"
                            onClick={submitSignUp}
                          />
                        </div>
                      </form>
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
                            type="email"
                            name="forgotemail"
                            id="forgotemail"
                            class="form-control"
                            placeholder="Enter your valid email..."
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ email: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div class="form-group"></div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="custom-button"
                          data-dismiss="modal"
                        >
                          Sign In
                        </button>
                        <button
                          type="submit"
                          name="forgotPass"
                          class="custom-button"
                          onClick={submitForgotPassword}
                        >
                          <i class="fa fa-envelope"></i>
                          Send Request
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
