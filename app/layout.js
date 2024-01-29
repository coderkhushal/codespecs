import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mainstate from '../context/maincontext/Mainstate'
import Productstate from '@/context/Productcontext/Productstate'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SessionWrapper from './auth/components/SessionWrapper'


// import { Provider } from 'react-redux'
// import store from '@/redux/store'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Codespecs.com - See The Code!',
  description: 'Ecommerce Store for every type of Specs for developers as well as non developers',
}

export default function RootLayout({ children }) {
  

  return (
    
      <SessionWrapper>
    <html lang="en">
      {/* <Provider store={store}> */}

      <Mainstate>
      <Productstate>
      <body className={`${inter.className} `} >
      <ToastContainer className={"z-50"} autoClose={1000}/>
        <Navbar />
        {children}
        <Footer/>
      </body>

    </Productstate>
    </Mainstate>
      {/* </Provider> */}
    </html>
      </SessionWrapper>
  )
}
