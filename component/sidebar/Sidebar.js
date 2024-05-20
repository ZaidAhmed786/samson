import React, { useContext, useEffect } from 'react'
import MobileMenuSection from '../mobile-menu/MobileMenuSection'
import { NafiabContext } from '@/context/NafiabContext'
import { useRouter } from 'next/router'
import { Nav, Tab } from 'react-bootstrap'
const Sidebar = () => {
    const {isSidebarOpen, handleSidebarClose} = useContext(NafiabContext)
    const router = useRouter();

    // Automatically close the sidebar when a route change occurs
    useEffect(() => {
        const closeSidebarOnRouteChange = () => {
            if (isSidebarOpen) {
                handleSidebarClose();
            }
        };

        router.events.on('routeChangeStart', closeSidebarOnRouteChange);

        return () => {
            router.events.off('routeChangeStart', closeSidebarOnRouteChange);
        };
    }, [handleSidebarClose, isSidebarOpen, router.events]);

    return (
        <>
            <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} role='button' onClick={handleSidebarClose}></div>

            <div className={`ba-sidebar-area ${isSidebarOpen ? 'active' : ''}`}>
                <div className="ba-sidebar-inner">
                    <div className="ba-sidebar-top">
                        <Tab.Container defaultActiveKey="menu">
                            <Nav variant="tabs" className="nav nav-tabs" id="ba-sidebar-nav">
                                <Nav.Item>
                                    <Nav.Link className='mobile-nav-btns' eventKey="menu">Menu</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className='mobile-nav-btns' eventKey="info">Info</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="ba-sidebar-content">
                                <Tab.Pane eventKey="menu">
                                <div className="ba-sidebar-nav-content">
                                <div className="ba-sidebar-logo-action-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-7">
                                            <div className="logo">
                                                <a href="index.html">
                                                    <img src="assets/img/logo/logo.png" alt="logo"/></a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-5">
                                            <div className="action">
                                                <div className="text-end">
                                                    <button className="ba-header-sidebar-action-close" onClick={handleSidebarClose}>
                                                        <i className="fal fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ba-sidebar-navigation-main">
                                    <MobileMenuSection/>
                                </div>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="info">
                                <div className="ba-sidebar-info-content">
                                <div className="ba-sidebar-logo-action-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-7">
                                            <div className="logo">
                                                <a href="index.html">
                                                    <img src="assets/img/logo/logo.png" alt="logo"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-5">
                                            <div className="action">
                                                <div className="text-end">
                                                    <button className="ba-header-sidebar-action-close">
                                                        <i className="fal fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>We must explain to you how all seds this mistakens idea off denouncing pleasures
                                    and praising pain was born and I will give you a completed accounts of the
                                    system and expound.</p>
                                <button type="submit" className="ba-submit-btn">Contact Us</button>
                                <div className="ba-header-right-actions text-end mt-35">
                                    <button className="ba-header-right-link ba-header-search-btn">
                                        <i className="fal fa-search"></i>
                                    </button>
                                    <a className="ba-header-right-link" href="index.html">
                                        <i className="fal fa-user"></i>
                                    </a>
                                </div>
                            </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
