import Link from "next/link";
import React from "react";

const BlogDetailSection = () => {
  return (
    <div className="blog-details area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="ba-blog-details-wrapper mb-50 mb-lg-0">
              <div className="ba-blog-details-content-main">
                <div className="ba-blog-details-img">
                  <img
                    src="assets/img/blog/blog-details-1.jpg"
                    alt="Broadband Internet"
                  />
                </div>
                <div className="ba-blog-details-content-wrapper pb-15">
                  <div className="ba-blog-box-archive-meta pb-15">
                    <Link href="/blog" className="item-1">
                      <i className="fas fa-user"></i> <span>Endith Smith</span>
                    </Link>
                    <Link href="/blog" className="item-2">
                      <i className="fas fa-calendar-alt"></i>{" "}
                      <span>Aug 1, 2022</span>
                    </Link>
                  </div>
                  <h2 className="ba-blog-details-title">
                    It’s hard to wear a beret without feeling Fashion Paris show
                    like
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip e commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum doloreg fugiat nullaariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt
                  </p>
                  <p className="mb-30">
                    in culpa qui offi deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantiu doloremque laudantium, totam rem aperiam, eaque
                  </p>
                  <div className="ba-blog-details-img-list-wrap mb-30">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 mb-30 mb-xl-0">
                        <img src="assets/img/blog/blog-details-sm.jpg" alt="" />
                      </div>
                      <div className="col-xxl-6 col-xl-6">
                        <div className="ba-blog-details-list-wrap pt-20">
                          <ul>
                            <li className="active">
                              <i className="fal fa-check-circle"></i>
                              <span>Enhance your home’s app</span>
                            </li>
                            <li className="active">
                              <i className="fal fa-check-circle"></i>
                              <span>More functional and simple</span>
                            </li>
                            <li className="active">
                              <i className="fal fa-check-circle"></i>
                              <span>Post Format Audio Blogs</span>
                            </li>
                            <li className="active">
                              <i className="fal fa-check-circle"></i>
                              <span>A Beautiful Sunday Morning</span>
                            </li>
                            <li className="active">
                              <i className="fal fa-check-circle"></i>
                              <span>In Mattis Scelerisque Magna</span>
                            </li>
                            <li>
                              <i className="fal fa-check-circle"></i>
                              <span>Bibendum Sed Libero</span>
                            </li>
                            <li>
                              <i className="fal fa-check-circle"></i>
                              <span>Pellentesque Mauris Nunc</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="ba-blog-details-title-inner">
                    Assertively Implement Client-Centric Models
                  </h5>
                  <p className="mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut laboreh et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris n aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in{" "}
                  </p>
                  <blockquote className="mb-30">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod temp incididunt labore et dolore magna aliqua
                    t enim ad minim veniam, quis nostrud exercitation ullam
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor
                  </blockquote>
                  <h5 className="ba-blog-details-title-inner">
                    Chicken with Coca-cola & Roasted Garlic
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit{" "}
                  </p>
                </div>
              </div>
              <div className="ba-blog-details-social-box mb-60">
                <div className="row align-items-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                    <div className="ba-blog-details-social-icons mb-10 mb-sm-0">
                      <h6>Share :</h6>
                      <Link href="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-skype"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                    <div className="text-sm-end">
                      <div className="ba-blog-details-comment-count">
                        <i className="fal fa-comment-dots"></i>
                        <span>Comment (03)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ba-blog-details-comment">
                <h5 className="ba-section-title-2 mb-50">Recent Comments</h5>
                <div className="ba-blog-comment-list pb-60">
                  <ul>
                    <li>
                      <div className="ba-blog-comment-box">
                        <div className="image">
                          <img
                            src="assets/img/user/user-1.png"
                            alt="user image"
                          />
                        </div>
                        <div className="content">
                          <div className="row pb-10">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                              <h6 className="title">Richard Smith</h6>
                              <span className="date">September 19, 2021</span>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                              <div className="text-sm-end">
                                <Link className="replay-link" href="#">
                                  Replay
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="content-main">
                            <p>
                              Perspiciatis unde omnis iste natus error sit
                              voluptatem accusant laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et
                              quasi architecto beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quia beatae
                              vitae dicta sunt explicabo
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div className="ba-blog-comment-box">
                            <div className="image">
                              <img
                                src="assets/img/user/user-2.png"
                                alt="user image"
                              />
                            </div>
                            <div className="content">
                              <div className="row pb-10">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                                  <h6 className="title">Laura Johnson</h6>
                                  <span className="date">April 20, 2022</span>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                                  <div className="text-sm-end">
                                    <Link className="replay-link" href="#">
                                      Replay
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="content-main">
                                <p>
                                  Perspiciatis unde omnis iste natus error sit
                                  voluptatem accusant laudantium, totam rem
                                  aperiam, eaque ipsa quae ab illo inventore
                                  veritatis et quasi architecto beatae vitae
                                  dicta sunt explicabo. Nemo enim ipsam
                                  voluptatem quia beatae vitae dicta sunt
                                  explicabo
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="ba-blog-comment-box">
                        <div className="image">
                          <img
                            src="assets/img/user/user-3.png"
                            alt="user image"
                          />
                        </div>
                        <div className="content">
                          <div className="row pb-10">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                              <h6 className="title">Richard Smith</h6>
                              <span className="date">Jun 30, 2022</span>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                              <div className="text-sm-end">
                                <Link className="replay-link" href="#">
                                  Replay
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="content-main">
                            <p>
                              Perspiciatis unde omnis iste natus error sit
                              voluptatem accusant laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et
                              quasi architecto beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quia beatae
                              vitae dicta sunt explicabo
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ba-blog-comment-box">
                <h5 className="ba-section-title-2 mb-50">Leave A Comment</h5>
                <form action="#">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="ba-blog-comment-input-wrap mb-30">
                        <input type="text" placeholder="Name*" />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="ba-blog-comment-input-wrap mb-30">
                        <input type="email" placeholder="E-mail *" />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="ba-blog-comment-input-wrap mb-30">
                        <textarea
                          name="comment_text"
                          id="comment_text"
                          placeholder="Your Comments*"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <Link href="#" className="ba-submit-btn">
                        Post Comments
                      </Link>
                    </div>
                  </div>
                </form>
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
                      <Link href="/blog">
                        Broadband <span className="count">(09)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        TV & Streaming <span className="count">(10)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Satellite TV <span className="count">(45)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Home Phone <span className="count">(19)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Home Security <span className="count">(10)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Internet (30) <span className="count">(45)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
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
                  <Link href="/blog">Internet</Link>
                  <Link href="/blog">Mobile</Link>
                  <Link href="/blog">Online</Link>
                  <Link href="/blog">Tv Box</Link>
                  <Link href="/blog">Movie</Link>
                  <Link href="/blog">Sports</Link>
                  <Link href="/blog">Android</Link>
                  <Link href="/blog">Iphone</Link>
                  <Link href="/blog">Business</Link>
                  <Link href="/blog">Finance</Link>
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

export default BlogDetailSection;
