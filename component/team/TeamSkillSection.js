import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const TeamSkillSection = () => {
  const skills = [
    { label: "Product Design", value: 70 },
    { label: "Technical Skills", value: 60 },
    { label: "Customer Support", value: 87 },
    { label: "Networking Skills", value: 40 },
    { label: "Technical Skills", value: 60 }
  ];

  return (
    <div className="ba-team-details-skill-progress pt-10">
      <h5 className="ba-team-details-skill-progress-title">Experience & Skill</h5>
      <div className="ba-team-details-skill-progress-wrapper">
        {skills.map((skill, index) => (
          <div className="ba-team-details-skill-progress-item" key={index}>
            <div className="ba-content">
              <span className="label">{skill.label}</span>
              <span className="value">{`${skill.value}%`}</span>
            </div>
            <div className="progress">
              <ProgressBar
                now={skill.value}
                label={`${skill.value}%`}
                srOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSkillSection;
