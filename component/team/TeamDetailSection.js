import React from "react";
import TeamDetailAuthorContent from "./TeamDetailAuthorContent";
import TeamSkillSection from "./TeamSkillSection";

const TeamDetailSection = () => {
  return (
    <div className="team-details-area pt-120 pb-100">
      <div className="container">
        <div className="row pb-60">
          <div className="col-xxl-8 col-xl-8">
            <div className="ba-team-details-author-skill-area pb-20 pb-xl-0">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 pb-20 pb-md-0">
                  <div className="ba-team-details-author-img">
                    <img src="assets/img/team/team-details.png" alt="image" />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-7">
                  <TeamDetailAuthorContent/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4">
            <TeamSkillSection/>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6">
            <div className="ba-team-details-info pb-20 pb-xl-0">
              <h5 className="ba-team-details-info-title">
                Personal Experience
              </h5>
              <div className="content">
                <p className="mb-30">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus.
                </p>
                <p className="ba-mb-0">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="ba-team-details-form">
              <h5 className="ba-team-details-form-title">
                Request A Quote For Work
              </h5>
              <form action="#" method="post">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="ba-team-details-input-wrap">
                      <input type="text" placeholder="Your Name" name="name" />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="ba-team-details-input-wrap">
                      <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="ba-team-details-input-wrap">
                      <input
                        type="text"
                        placeholder=" Website"
                        name="website"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="ba-team-details-input-wrap">
                      <textarea
                        name="comment"
                        id="ba-comment"
                        cols="30"
                        rows="10"
                        placeholder="Your Comment"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <button className="ba-submit-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailSection;
