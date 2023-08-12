import { createContext } from "react";

export const initAuthState = {
  user: {
    userId: undefined,
    username: undefined,
    email: undefined,
  },
  isAuthenticated: false,
  isInitialize: false,
};

export const AuthContext = createContext(initAuthState);
