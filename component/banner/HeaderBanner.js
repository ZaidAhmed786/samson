import React from 'react'
import HeaderTop from '../header/HeaderTop'
import HeaderArea from '../header/HeaderArea'
import Sidebar from '../sidebar/Sidebar'
import BannerSection from './BannerSection'

const HeaderBanner = () => {
  return (
    <div className="header-banner-bg">
        <div className="container">
            <HeaderTop/>
            <HeaderArea/> 
            <Sidebar/>
            <BannerSection/>
        </div>
    </div>
  )
}

export default HeaderBanner