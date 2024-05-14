import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = function () {
  return (
    <>
      {/* <!-- FOOTER AREA START --> */}
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <Container fluid>
            <Row>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      {/* <img  src="/img/logo.png" alt="Logo" /> */}
                      <img src="/img/logo.png" alt="Logo" height={60} />
                    </div>
                  </div>
                  <p>
                    Unlock your dream home with Super Save Realty - Where
                    expertise meets excellence in real estate.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            Samson Properties 1140 3rd st NE Suite 405,
                            Washington, DC 20002 O: 202-257-1200
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <Link href="tel:+18636952461">
                              +1(863)-695-2461
                            </Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <Link href="/" title="Facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link href="/" title="Twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link href="/" title="Linkedin">
                          <FaLinkedin />
                        </Link>
                      </li>
                      <li>
                        <Link href="/" title="Youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={2}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/shop">All Products</Link>
                      </li>

                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      {/* <li>
                        <Link href="/contact">
                          Contact us</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} xl={3}>
                <div className="footer-widget footer-menu-widget clearfix">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="/termsandCondition">
                          Terms and Conditions
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacypolice">Privacy Police</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} xl={4}>
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="/">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          {" "}
                          <FaPaperPlane />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="mt-30">We Accept</h5>
                  <img src="/img/icons/payment-4.png" alt="Payment Image" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
        <p style={{textAlign: 'center'}}>
          Welcome to Super Savvy Sales, where selling your home is easy, fast,
          and commission-free! Our cash offer ensures a quick home sale process,
          putting top dollar in your pocket. Enjoy a free home valuation and a
          seamless, fast closing process. No condition is too challenging for us
          – we buy houses in any state. Say hello to a stress-free selling
          experience with Super Savvy Sales.
        </p>
          <h1
            style={{
              width: "fit-content",
              margin: "auto",
              textAlign: "center",
            }}
          >
            DISCLAIMER
          </h1>
          <p style={{ width: "70%", margin: "auto", textAlign: "center" }}>
            ​ This website represents Samson Properties, a reputable real estate
            company. The content provided here is for informational purposes
            only and does not constitute an offer to avail of any specific
            service. Prices mentioned are subject to change without prior
            notice, and the availability of properties may vary. The logos and
            images displayed on this website are the exclusive property of
            Samson Properties and are protected under applicable copyright laws.
            We do not claim any ownership or rights to materials not directly
            associated with our brand. These visuals are used solely for
            illustrative and informational purposes. For any inquiries or
            further details, please feel free to contact us. Thank you for
            visiting Samson Properties!
          </p>
          <div className="container-fluid ltn__border-top-2">
            <Row>
              <Col xs={12} md={6}>
                <div className="ltn__copyright-design clearfix">
                  <p>
                    All Rights Reserved @ Samson Properties
                    <span className="current-year"></span>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} className="align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li>
                      <Link href="/termsandCondition">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacypolicy">Privacy & Policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER AREA END --> */}
    </>
  );
};

export default Footer;
