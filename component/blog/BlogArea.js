import Link from "next/link";
import React from "react";

const BlogArea = () => {
  return (
    <div className="blog-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="blog-box-archive-wrapper">
              <div className="ba-blog-box-archive mb-40">
                <div className="image">
                  <Link href="/blogDetails">
                    <img src="assets/img/blog/blog-1.jpg" alt="" />
                  </Link>
                </div>
                <div className="content">
                  <div className="ba-blog-box-archive-meta pb-25">
                    <Link href="#" className="item-1">
                      <i className="fas fa-user"></i> <span>Endith Smith</span>
                    </Link>
                    <Link href="/blogDetails" className="item-2">
                      <i className="fas fa-calendar-alt"></i>{" "}
                      <span>Aug 1, 2022</span>
                    </Link>
                  </div>
                  <h3 className="ba-blog-box-archive-title">
                    <Link href="/blogDetails">
                      Broadband Connection Needs To Everyone Life How to Build
                      Your Broadband
                    </Link>
                  </h3>
                  <p>
                    When to Use Lorem Ipsum generally, lorem ipsum is best
                    suited to keeping templates from looking bare or minimizing
                    the distractions of the draft copy. Second, use lorem ipsum
                    if you think the placeholder text will be too distracting.
                    For specific projects, a collaboration between copywriters
                    and designers may be best, however, like KarecGran When to
                    Use Lorem Ipsum generally, lorem ipsum is best suited to
                    keeping templates from looking bare or
                  </p>
                  <Link href="/blogDetails" className="ba-submit-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="ba-blog-box-archive mb-40">
                <div className="image">
                  <Link href="/blogDetails">
                    <img src="assets/img/blog/blog-2.jpg" alt="" />
                  </Link>
                </div>
                <div className="content">
                  <div className="ba-blog-box-archive-meta pb-25">
                    <Link href="#" className="item-1">
                      <i className="fas fa-user"></i> <span>Endith Smith</span>
                    </Link>
                    <Link href="#" className="item-2">
                      <i className="fas fa-calendar-alt"></i>{" "}
                      <span>Aug 1, 2022</span>
                    </Link>
                  </div>
                  <h3 className="ba-blog-box-archive-title">
                    <Link href="/blogDetails">
                      This Is How Broadband Will Look Like In 10 Years Time.
                    </Link>
                  </h3>
                  <p>
                    When to Use Lorem Ipsum generally, lorem ipsum is best
                    suited to keeping templates from looking bare or minimizing
                    the distractions of the draft copy. Second, use lorem ipsum
                    if you think the placeholder text will be too distracting.
                    For specific projects, a collaboration between copywriters
                    and designers may be best, however, like KarecGran When to
                    Use Lorem Ipsum generally, lorem ipsum is best suited to
                    keeping templates from looking bare or
                  </p>
                  <Link href="/blogDetails" className="ba-submit-btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="ba-blog-box-archive mb-40">
                <div className="image">
                  <Link href="/blogDetails">
                    <img src="assets/img/blog/blog-3.jpg" alt="" />
                  </Link>
                </div>
                <div className="content">
                  <div className="ba-blog-box-archive-meta pb-25">
                    <Link href="#" className="item-1">
                      <i className="fas fa-user"></i> <span>John Doe</span>
                    </Link>
                    <Link href="#" className="item-2">
                      <i className="fas fa-calendar-alt"></i>{" "}
                      <span>Feb 1, 2022</span>
                    </Link>
                  </div>
                  <h3 className="ba-blog-box-archive-title">
                    <Link href="/blogDetails">
                      How To Have A Fantastic Broadband With Minimal Spending.
                    </Link>
                  </h3>
                  <p>
                    When to Use Lorem Ipsum generally, lorem ipsum is best
                    suited to keeping templates from looking bare or minimizing
                    the distractions of the draft copy. Second, use lorem ipsum
                    if you think the placeholder text will be too distracting.
                    For specific projects, a collaboration between copywriters
                    and designers may be best, however, like KarecGran When to
                    Use Lorem Ipsum generally, lorem ipsum is best suited to
                    keeping templates from looking bare or
                  </p>
                  <Link href="/blogDetails" className="ba-submit-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="ba-blog-sidebar-widget-wrapper pl-50">
              <div className="ba-blog-widget mb-50">
                <div className="ba-blog-search-form">
                  <form action="#" method="post">
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="ba-blog-widget mb-50">
                <h4 className="ba-blog-widget-title">Categories</h4>
                <div className="ba-blog-widget-list">
                  <ul>
                    <li>
                      <Link href="#">
                        Broadband <span className="count">(09)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        TV & Streaming <span className="count">(10)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Satellite TV <span className="count">(45)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Home Phone <span className="count">(19)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Home Security <span className="count">(10)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Internet (30) <span className="count">(45)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        Reportage <span className="count">(19)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ba-blog-widget mb-50">
                <h4 className="ba-blog-widget-title">Latest Post</h4>
                <div className="ba-blog-widget-post-wrapper">
                  <div className="ba-blog-widget-post fix mb-30">
                    <div className="image">
                      <Link href="/blogDetails">
                        <img src="assets/img/widgets/blog-sm-1.png" alt="" />
                      </Link>
                    </div>
                    <div className="content pt-10">
                      <h4 className="title">
                        <Link href="/blogDetails">
                          This Place Really Place For Awesome Moment
                        </Link>
                      </h4>
                      <div className="date-meta">
                        <i className="fal fa-calendar"></i>{" "}
                        <span>July 24, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="ba-blog-widget-post fix mb-30">
                    <div className="image">
                      <Link href="/blogDetails">
                        <img src="assets/img/widgets/blog-sm-2.png" alt="" />
                      </Link>
                    </div>
                    <div className="content pt-10">
                      <h4 className="title">
                        <Link href="/blogDetails">
                          When Two Wheels Better Thannt
                        </Link>
                      </h4>
                      <div className="date-meta">
                        <i className="fal fa-calendar"></i>{" "}
                        <span>July 21, 2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="ba-blog-widget-post fix mb-30">
                    <div className="image">
                      <Link href="/blogDetails">
                        <img src="assets/img/widgets/blog-sm-3.png" alt="" />
                      </Link>
                    </div>
                    <div className="content pt-10">
                      <h4 className="title">
                        <Link href="/blogDetails">
                          Put Yourself In Our Awesome Customers
                        </Link>
                      </h4>
                      <div className="date-meta">
                        <i className="fal fa-calendar"></i>{" "}
                        <span>July 21, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-blog-widget mb-50">
                <h4 className="ba-blog-widget-title">Latest Post</h4>
                <div className="tagcloud">
                  <Link href="#">Internet</Link>
                  <Link href="#">Mobile</Link>
                  <Link href="#">Online</Link>
                  <Link href="#">Tv Box</Link>
                  <Link href="#">Movie</Link>
                  <Link href="#">Sports</Link>
                  <Link href="#">Android</Link>
                  <Link href="#">Iphone</Link>
                  <Link href="#">Business</Link>
                  <Link href="#">Finance</Link>
                </div>
              </div>
              <div className="ba-blog-widget mb-50">
                <h4 className="ba-blog-widget-title">Newsletter</h4>
                <div className="ba-blog-widget-subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Newsletter" />
                    <button type="submit">
                      <i className="fal fa-envelope"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
