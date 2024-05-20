import React, { useContext } from 'react'
import NavSection from '../navigation/NavSection'
import { NafiabContext } from '@/context/NafiabContext'
import Link from 'next/link'

const HeaderArea = () => {
    const {handleSearchShow,  handleSidebarOpen, handleCartOpen, cartItems} = useContext(NafiabContext)
  return (
    <header className="header-area header-1">
        <div className="ba-header-nav-area">
            <div className="style-2">
                <div className="ba-header-nav-inner header-bottom">
                    <div className="row align-items-center">

                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                            <div className="ba-header-logo" style={{fontSize: '30px'}}>
                            Beamen Tech LLC
                            </div>
                        </div>

                        <div className="col-xxl-9 col-xl-9 col-lg-9 d-none d-lg-block">
                            <div className="ba-header-nav-wrapper text-end">
                                <NavSection nav={"ba-header-nav-menu header-bottom__nav"}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeaderArea