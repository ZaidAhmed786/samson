import Link from "next/link";
import React from "react";

const teamMembers = [
  {
    name: "Mohammad Rizwan",
    designation: "Marketing Officer",
    imageSrc: "assets/img/team/team-1.jpg",
    socialMedia: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
      { icon: "fab fa-youtube", link: "#" },
    ],
  },
  {
    name: "Alyssa Healy",
    designation: "Web Developer",
    imageSrc: "assets/img/team/team-2.jpg",
    socialMedia: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
      { icon: "fab fa-youtube", link: "#" },
    ],
  }, {
    name: "Mohammad Haris",
    designation: "Developer",
    imageSrc: "assets/img/team/team-3.jpg",
    socialMedia: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
      { icon: "fab fa-youtube", link: "#" },
    ],
  }, {
    name: "Natalie Sciver",
    designation: "Manager",
    imageSrc: "assets/img/team/team-4.jpg",
    socialMedia: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
      { icon: "fab fa-youtube", link: "#" },
    ],
  },
];

const TeamSection = () => {
  return (
    <div className="team-area pt-115 pb-120">
      <div className="container">
        <div className="row justify-content-center pb-60">
          <div className="col-xxl-6 col-xl-7 col-lg-9">
            <div className="ba-section-title-wrapper text-center">
              <h3 className="ba-section-title pb-12">Professional Team</h3>
              <p className="ba-mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod te incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim to saidul{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 mb-xl-0"
              key={index}
            >
              <div
                className="ba-team-card-box wow fadeInUp"
                data-wow-delay={`.${index + 1}s`}
              >
                <div className="image">
                  <Link href="/teamDetails">
                    <img src={member.imageSrc} alt="person" />
                  </Link>
                </div>
                <div className="content text-center">
                  <h5 className="ba-team-card-box-title">
                    <Link href="/teamDetails">{member.name}</Link>
                  </h5>
                  <Link
                    href="/teamDetails"
                    className="ba-team-card-box-designation"
                  >
                    {member.designation}
                  </Link>
                  <div className="ba-team-card-box-social">
                    {member.socialMedia.map((social, index) => (
                      <Link key={index} href={social.link}>
                        <i className={social.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
