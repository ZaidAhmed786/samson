import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <div className="ba-blog-area pb-120 pt-115 home-blog-section">
      <div className="container">
        <div className="row pb-60">
          <div className="col-xxl-12">
            <div className="ba-section-title-wrapper text-center ba-has-wrapped-br">
              <h3 className="ba-section-title">
                Read Our Recent
                <br /> Blog Posts
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xl-0">
            <div
              className="ba-blog-box-transparent ba-blog-box-transparent-height bg-default wow fadeInUp home-blog-post"
              data-wow-delay=".1s"
            >
              <div className="ba-blog-box-content">
                <div className="ba-blog-box-meta-wrapper">
                  <div className="ba-blog-box-meta-single">
                    <i className="fas fa-user"></i>
                    <Link href="/blogDetails">Bailey Turner</Link>
                  </div>
                  <div className="ba-blog-box-meta-single">
                    <i className="fal fa-calendar"></i>
                    <span>Apr 25, 2022</span>
                  </div>
                </div>
                <h4 className="ba-blog-box-title">
                  <Link href="/blogDetails">
                    Broadband Connection Needs
                    <br />
                    To Everyone Life
                  </Link>
                </h4>
                <p>
                  We help ambitious businesses like yours generate more profits{" "}
                </p>
                <Link href="/blogDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30 mb-xl-0">
            <div
              className="ba-blog-box-solid-white  wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="ba-blog-box-img">
                <Link href="/blogDetails">
                  <img src="assets/img/blog/blog-box-1.png" alt="girl-lying" />
                </Link>
              </div>
              <div className="ba-blog-box-content">
                <div className="ba-blog-box-meta-wrapper">
                  <div className="ba-blog-box-meta-single">
                    <i className="fas fa-user"></i>
                    <Link href="/blogDetails">Lydia Webster</Link>
                  </div>
                  <div className="ba-blog-box-meta-single">
                    <i className="fal fa-calendar"></i>
                    <span>July 11, 2022</span>
                  </div>
                </div>
                <h4 className="ba-blog-box-title">
                  <Link href="/blogDetails">
                    Children Loves the Cartoons
                    <br /> And Our New Channels
                  </Link>
                </h4>
                <p>
                  We help ambitious businesses like yours generate more profits{" "}
                </p>
                <Link href="/blogDetails" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 mb-30 mb-xl-0">
            <div
              className="ba-blog-box-list-wrapper wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="ba-blog-box-list-item">
                <div className="ba-blog-box-meta-wrapper">
                  <div className="ba-blog-box-meta-single">
                    <i className="fas fa-user"></i>
                    <Link href="/blogDetails">Ashley Parker</Link>
                  </div>
                  <div className="ba-blog-box-meta-single">
                    <i className="fal fa-calendar"></i>
                    <span>Dec 15, 2021</span>
                  </div>
                </div>
                <h4 className="ba-blog-box-title">
                  <Link href="/blogDetails">
                    Watch Your Favorite Racing Sport Channels!
                  </Link>
                </h4>
              </div>
              <div className="ba-blog-box-list-item">
                <div className="ba-blog-box-meta-wrapper">
                  <div className="ba-blog-box-meta-single">
                    <i className="fas fa-user"></i>
                    <Link href="/blogDetails">Manuel Davidson</Link>
                  </div>
                  <div className="ba-blog-box-meta-single">
                    <i className="fal fa-calendar"></i>
                    <span>Aug 1, 2022</span>
                  </div>
                </div>
                <h4 className="ba-blog-box-title">
                  <Link href="/blogDetails">
                    At vero eos et accusamus et iusto odio dignissimos
                  </Link>
                </h4>
              </div>
              <div className="ba-blog-box-list-item">
                <div className="ba-blog-box-meta-wrapper">
                  <div className="ba-blog-box-meta-single">
                    <i className="fas fa-user"></i>
                    <Link href="/blogDetails">Hayden Taylor</Link>
                  </div>
                  <div className="ba-blog-box-meta-single">
                    <i className="fal fa-calendar"></i>
                    <span>Jul 7, 2022</span>
                  </div>
                </div>
                <h4 className="ba-blog-box-title">
                  <Link href="/blogDetails">
                    When Movie Stars Switch to Reality TV Shows
                  </Link>
                </h4>
              </div>
              <div className="ba-blog-box-list-action-btn pt-10">
                <Link href="/blogDetails" className="ba-submit-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
