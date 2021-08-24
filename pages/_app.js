import 'tailwindcss/tailwind.css'
import "../components/assets/style.css"
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
      <>

        <NextNProgress color="#02a95c" />
        <Component {...pageProps} />

      </>
        )
}

export default MyApp
