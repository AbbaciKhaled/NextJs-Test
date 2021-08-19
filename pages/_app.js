import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/layout.css'

import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

function MyApp({ Component, pageProps }) {

  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />)

  return (
    <>
      <Header></Header>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer></Footer>
    </>
  )


}

export default MyApp
