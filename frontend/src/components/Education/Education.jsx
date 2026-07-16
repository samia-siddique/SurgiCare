import React from "react";

const Education = () => {
  const studies = [
    { name: "MBBS", place: "Services Hospital, Lahore" },
    { name: "MRCS", place: "Edinburg" },
    { name: "Coloproctology Course", place: "Switzerland" },
    { name: "FACS", place: "United States of America" },
  ];
  return (
    <div className="education">
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
  );
};

export default Education;
