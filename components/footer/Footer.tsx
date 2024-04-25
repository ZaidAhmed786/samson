import React from "react";
const Footer = () => {
  return (
    <>
      <div style={{ margin: "auto", padding: "0px 20px 0px 20px" }}>
        <img src="/logo2.jpg" />
        <p>
          The data relating to real estate for sale on this website appears in
          part through the BRIGHT Internet Data Exchange program, a voluntary
          cooperative exchange of property listing data between licensed real
          estate brokerage firms in which Samson Properties participates, and is
          provided by BRIGHT through a licensing agreement. The information
          provided by this website is for the personal, non-commercial use of
          consumers and may not be used for any purpose other than to identify
          prospective properties consumers may be interested in purchasing. Real
          estate listings held by brokerage firms other than Samson Properties
          are marked with the IDX icon and detailed information about each
          listing includes the name of the listing broker. ©2024 BRIGHT, All
          Rights Reserved. Information Deemed Reliable But Not Guaranteed. Some
          properties which appear for sale on this website may no longer be
          available because they are under contract, have Closed or are no
          longer being offered for sale. Data last updated: Apr 25, 2024
          3:05:pm.
        </p>
      </div>
      <footer>
        <div className="row d-flex flex-row">
          <div
            className="col-8 m-4 d-flex flex-column justify-content-around align-items-lefth-full"
            style={{ maxHeight: "40vh" }}
          >
            <p>
              Samson Properties 1140 3rd st NE Suite 405, Washington, DC 20002
              O: 202-257-1200
            </p>
            <p>
              © 2024 Samson Properties | Terms of Use | Privacy Policy | Fair
              Housing | Accessibility Statement | Site Map | Admin Login
            </p>
          </div>
          <div className="col-3  d-flex justify-content-end align-items-end" style={{height: '35vh'}}>
            <img src="/ml-logo-footer-white.WEBP" style={{height:'40px'}}/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
