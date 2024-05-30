import Link from 'next/link'
import React from 'react'

const NavSection = ({ nav }) => {
    return (
      <nav className={nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#">Internet</Link>
            <ul className="submenu index-1-submenu">
              <li>
                <Link href="/wirelessInternet">Wireless 5G Internet</Link>
              </li>
              <li>
                <Link href="/fiberInternet">Fiber Internet</Link>
              </li>
              <li>
                <Link href="/satelliteInternet"> Satellite internet</Link>{" "}
              </li>
            </ul>
          </li>
          <li>
            <Link href="/cabletv">Cable TV</Link>
          </li>
          <li>
            <Link href="/faqs">FAQ's</Link>
          </li>
          <li>
            <Link href="/aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link href="/RefundPolicy">Refund Policy</Link>
          </li>
          <li>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
    );
}

export default NavSection