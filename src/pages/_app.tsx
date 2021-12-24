import { ToastContainer } from 'react-toastify'
import Header from '../components/layout/Header'
import { IoProvider } from '../contexts/SocketIoContext'

import 'react-toastify/dist/ReactToastify.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ApplicationLayout } from '../components/layout/ApplicationLayout'
import { theme } from '../../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  //<Component {...pageProps} />
  return (
    <ChakraProvider theme={theme}>
      <IoProvider>
        <ApplicationLayout>
          <Component {...pageProps} />
        </ApplicationLayout>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </IoProvider>
    </ChakraProvider>
  )
}

export default MyApp
