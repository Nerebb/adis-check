import { useContext, useEffect, useReducer } from "react";
import { AuthContext, initAuthState } from ".";
import axiosApi from "../app/axiosApi";
import { isValidToken, setToken } from "../utils/jwtToken";

export function AuthProvider({ children }) {
  const [user, setUser] = useReducer((prev, next) => {
    return { ...prev, ...next };
  }, initAuthState);

  useEffect(() => {
    async function initialize() {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken && isValidToken(accessToken)) {
          setToken(accessToken);
          const response = await axiosApi.getProfile();

          if (response && response.data) {
            const {
              data: { token, ...user },
            } = response;
            setUser({
              user,
              isAuthenticated: true,
              isInitialize: true,
            });
          }
        } else {
          setUser({ isInitialize: true });
        }
      } catch (error) {
        console.log("AuthError", error);

        setToken(null);
        setUser(initAuthState);
      }
    }

    initialize();
  }, []);

  async function signIn({ email, password, rememberme }, callback) {
    const response = await axiosApi.login({ email, password });
    if (rememberme) setToken(response.data.token);
    setUser({
      user: response.data.user,
      isAuthenticated: true,
    });

    await callback(response);
    return response;
  }

  async function signUp({ email, password, phone, username }, callback) {
    const response = await axiosApi.register({
      email,
      password,
      phone,
      username,
    });
    await callback(response);
    return response;
  }

  async function logout() {
    setToken(null);
    setUser(initAuthState);
  }

  return (
    <AuthContext.Provider value={{ ...user, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const content = useContext(AuthContext);
  if (!content)
    throw new Error("Authcontext must be used within <AuthContext.Provider/>");
  return { ...content };
}
