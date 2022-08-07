import React, { memo } from 'react'
import LandingFooter from './landing'

const Footer = ({ isMagazineContents }) => {

  if (isMagazineContents) {
    return null
  }

  return (<LandingFooter />)
}

export default Footer
