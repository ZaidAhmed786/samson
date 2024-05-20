import React from 'react'
import FooterSection from '../footer/FooterSection'

const Layout = ({children}) => {
  return (
    <>
        {children}
        <FooterSection/>
    </>
  )
}

export default Layout