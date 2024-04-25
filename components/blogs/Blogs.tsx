import React from "react";

const Blogs = () => {
  return (
    <div className="card-group text-center">
      <div className="card m-3">
        <img className="card-img-top" src="/slide2.jpg" alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-title">Top 4 Deal Killers for Homebuyers</h3>
          <p className="font-italic font-weight-blod text-center">
            Falling in love is exhilarating. It can also be a bit scary,
            especially when a home has captured your heart. What if something
            goes wrong and you end…{" "}
          </p>
          <div className="text-center">
            <div className="mb-4">
              <a href="#" className="text-primary font-weight-blod font-italic">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card m-3">
        <img className="card-img-top" src="/blog3.webp" alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-title">
            5 DIY Improvements to Make Your Home Classier
          </h3>
          <p className="card-text card-text font-italic font-weight-blod">
            Updating your home to be more chic - without looking cheap - is
            completely doable on a budget. If you're looking to add more class
            to your home…{" "}
          </p>{" "}
          <div className="text-center">
            <div className="mb-4">
              <a href="#" className="text-primary font-weight-blod font-italic">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card m-3">
        <img className="card-img-top" src="/blog1.jpg" alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-title">
            When to Get Excited About the Housing Market
          </h3>
          <p className="card-text font-italic font-weight-blod">
            Real estate professionals get that consumers, by and large, ignore
            housing statistics and the market until they become involved in the
            purchase or…
          </p>
          <div className="text-center">
            <div className="mb-4">
              <a href="#" className="text-primary font-weight-blod font-italic">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
