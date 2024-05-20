import Link from "next/link";
import React, { useState } from "react";

const MobileMenuSection = () => {
  const [isDropdownOpen,setIsDropdownOpen] = useState({
    home:false,
    blog:false,
    pages:false
  })
  const handleDropdownToggle = (section) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
  return (
    <div className="mobile-menu mean-container">
      <div className="mean-bar">
        <nav className="mean-nav mobile-menu-min-nav">
          <ul>
            <li>
              <a 
              role="button" 
              className="nf-nav-link"
              >
                  <span>Home</span>
                  <i 
                  className={`fal ${isDropdownOpen.home ? 'fa-minus':'fa-plus'}`} 
                  role='button' 
                  onClick={() => handleDropdownToggle('home')}
                  ></i>
              </a>
              <ul className={`submenu ${isDropdownOpen.home? 'd-block':'d-none'}`}>
                <li>
                  <Link href="/">Home 01</Link>
                </li>
                <li>
                  <Link href="/homePage2" className="nf-sub-nav-link">Home 02</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" className="nf-nav-link">About</Link>
            </li>
            <li>
            <a 
              role="button" 
              className="nf-nav-link"
              >
                  <span>Blog</span>
                  <i 
                  className={`fal ${isDropdownOpen.blog ? 'fa-minus':'fa-plus'}`} 
                  role='button' 
                  onClick={() => handleDropdownToggle('blog')}
                  ></i>
              </a>
              <ul className={`submenu ${isDropdownOpen.blog? 'd-block':'d-none'}`}>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/blogDetails" className="nf-sub-nav-link">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li>
              <a 
              role="button" 
              className="nf-nav-link"
              >
                  <span>Pages</span>
                  <i 
                  className={`fal ${isDropdownOpen.pages ? 'fa-minus':'fa-plus'}`} 
                  role='button' 
                  onClick={() => handleDropdownToggle('pages')}
                  ></i>
              </a>
              <ul className={`submenu ${isDropdownOpen.pages? 'd-block':'d-none'}`}>
                <li>
                  <Link href="/error">Error</Link>
                </li>
                <li>
                  <Link href="/faq">Faq</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/service">Service</Link>
                </li>
                <li>
                  <Link href="/serviceDetails">Service Details</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li>
                  <Link href="/teamDetails" className="nf-sub-nav-link">Team Details</Link>
                </li>
              </ul>
            </li>
            <li className="mean-last">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuSection;
