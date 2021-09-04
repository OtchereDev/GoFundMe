import 'tailwindcss/tailwind.css'
import "../components/assets/style.css"
import NextNProgress from 'nextjs-progressbar'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
      <>

        <NextNProgress color="#02a95c" />
        <ToastContainer/>
        <Component {...pageProps} />

      </>
        )
}

export default MyApp
