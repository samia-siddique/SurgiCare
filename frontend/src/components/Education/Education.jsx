import React from "react";
import "./Education.css";

const Education = () => {
  const studies = [
    { name: "MBBS", place: "Services Hospital, Lahore" },
    { name: "FCPS", place: "Services Hospital, Lahore" },
    { name: "MRCS", place: "Edinburg" },
    { name: "Coloproctology Course", place: "Switzerland" },
    { name: "FACS", place: "Servises Hospital, Lahore" },
  ];

  return (
    <div className="education">
      <div className="bg-texture"></div>
      <p className="education-title">EDUCATION</p>

      <h2>Professional Qualifications</h2>

      <p className="education-para">
        A journey of medical education, advanced surgical training, and
        internationally recognized certifications.
      </p>

      <div className="education-container">
        {studies.map((study, index) => (
          <div className="studies-timeline" key={study.name}>
            <div className="timeline-dot"></div>

            <div className="study-content">
              <h3>{study.name}</h3>
              <p>{study.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
