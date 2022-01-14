import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from '../../styles/global'
import { theme } from '../../styles/theme'
import { ApplicationLayout } from '../components/layout/ApplicationLayout'
import { IoProvider } from '../contexts/SocketIoContext'

function WorshipScheduleApp({ Component, pageProps }: AppProps) {
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

      <GlobalStyles />
    </ChakraProvider>
  )
}

export default appWithTranslation(WorshipScheduleApp)
