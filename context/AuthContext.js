import { useRouter } from "next/router";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser, removeUser } from "../store/slices/userSlice";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authReady, setAuthReady] = useState(false);
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    checkUserLoggedIn().then((data) => {
      setAuthReady(true);
      if (data) {
        setUser(() => data?.full_name);

        dispatch(registerUser(data?.full_name));
      }
    });
  }, []);

  const router = useRouter();

  const login = async (body) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) return toast.error(data.message);

    toast.success("Login succedded");

    return router.push("/");
  };

  const signup = async (body) => {
    const res = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) return data.message.forEach((message) => toast.error(message));

    toast.success("Sign-up succedded...Please Log In!!");
    return router.push("/sign-in");
  };

  const logout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      dispatch(removeUser());
    }
    toast.info("Successfully logged out");
  };

  const checkUserLoggedIn = async () => {
    const res = await fetch("/api/current-user", {
      method: "POST",
    });

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  };

  const clearUser = () => {
    setUser(null);
    dispatch(removeUser());
  };

  return (
    <AuthContext.Provider
      value={{ login, user, signup, logout, checkUserLoggedIn, setUser }}
    >
      {authReady && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
