import { useContext, useEffect, useReducer } from "react";
import { AuthContext } from ".";
import axiosApi from "../app/axiosApi";
import { isValidToken, setToken } from "../utils/jwtToken";
import axios from "axios";
import axiosClient from "../app/axiosClient";

const initState = {
  user: {
    userId: undefined,
    username: undefined,
    email: undefined,
  },
  isAuthenticated: false,
  isInitialize: false,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useReducer((prev, next) => {
    return { ...prev, ...next };
  }, initState);

  useEffect(() => {
    async function initialize() {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken && isValidToken(accessToken)) {
          setToken(accessToken);
          const response = await axiosApi.getProfile();

          // setUser
        }
      } catch (error) {}
    }

    initialize();
  }, []);

  async function signIn({ email, password, rememberme }, callback) {
    const response = await axiosApi.login({ email, password });
    if (rememberme) setToken(response.data.token);
    setUser({ isAuthenticated: true });

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
    setUser(initState);
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
