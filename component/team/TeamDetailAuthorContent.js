import React from "react";

const TeamDetailAuthorContent = () => {
  return (
    <div className="ba-team-details-author-content pt-10">
      <div className="ba-team-details-author-top pb-25">
        <h5 className="ba-team-details-author-name">Archer Graham</h5>
        <span className="ba-team-details-author-designation">
          Graphice Designer
        </span>
      </div>
      <div className="ba-team-details-author-experience-list pb-15">
        <ul>
          <li>
            <span className="label">Position:</span>
            <span className="value">Broadband</span>
          </li>
          <li>
            <span className="label">Practice Area:</span>
            <span className="value">Family Lawyer, Criminal Defence</span>
          </li>
          <li>
            <span className="label">Experience:</span>
            <span className="value">12 Years</span>
          </li>
          <li>
            <span className="label">Address:</span>
            <span className="value">Millington, Ave, TN 38053</span>
          </li>
          <li>
            <span className="label">Phone:</span>
            <span className="value">
              <a href="tel:+00568746987">+00 568 746 987</a>
            </span>
          </li>
          <li>
            <span className="label">Email:</span>
            <a href="mailto:youremail@gmail.com" className="value">
              youremail@gmail.com
            </a>
          </li>
          <li>
            <span className="label">Website:</span>
            <a href="yourwebsitehere.com" className="value">
              yourwebsitehere.com
            </a>
          </li>
          <li>
            <span className="label">Fax: </span>
            <a className="value" href="tel:568746987">
              568 746 987
            </a>
          </li>
        </ul>
      </div>
      <div className="ba-team-card-box-social ba-has-social-left">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default TeamDetailAuthorContent;
