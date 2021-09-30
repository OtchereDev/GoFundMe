import "tailwindcss/tailwind.css";
import "../components/assets/style.css";
import NextNProgress from "nextjs-progressbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext>
      <NextNProgress color="#02a95c" />
      <ToastContainer />
      <Component {...pageProps} />
    </AuthContext>
  );
}

export default MyApp;
