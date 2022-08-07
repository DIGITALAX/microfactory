import 'animate.css'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Footer from '@components/layouts/footer'
import HeaderTopLine from '@components/layouts/header-top-line'


import '../assets/scss/global.scss'
import 'tailwindcss/dist/tailwind.css'
import '../styles/globals.css'

import 'swiper/swiper.min.css'
// import 'swiper/swiper.scss' // core Swiper
// import 'swiper/modules/navigation/navigation.scss' // Navigation module
// import 'swiper/modules/pagination/pagination.scss' // Pagination module


const MyApp = ({ Component, pageProps }) => {

  return (
    <div>
      <Head>
        <title>Microfactory</title>
        <link rel="icon" type="image/png" href="/images/favicon-digitalax.ico" />
        <link href="https://fonts.cdnfonts.com/css/internal-rainbows" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
        {/* <script src="/js/custom.js"></script> */}
      </Head>
          <HeaderTopLine />
            <Component {...pageProps} />
          <Footer />
   </div>
  )
}


MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
  store: PropTypes.object,
  err: PropTypes.any,
  backError: PropTypes.object,
}

MyApp.defaultProps = {
  pageProps: {},
}


export default MyApp
