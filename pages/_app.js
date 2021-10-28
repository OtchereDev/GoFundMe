import 'antd/es/modal/style/index.css'
import 'antd/es/button/style/index.css'
import 'antd/es/slider/style/index.css';
import 'antd/es/timeline/style/index.css'
import "tailwindcss/tailwind.css";
import "../components/assets/style.css";
import NextNProgress from "nextjs-progressbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "../context/AuthContext";

import { store } from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthContext>
        <NextNProgress color="#02a95c" />
        <ToastContainer />
        <Component {...pageProps} />
      </AuthContext>
    </Provider>
  );
}

export default MyApp;
