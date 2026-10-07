import React from "react";
import "./Experties.css";
import {
  ScanSearch,
  Microscope,
  ShieldPlus,
  Scissors,
  Stethoscope,
  HeartPulse,
} from "lucide-react";

const Experties = () => {
  const services = [
    {
      icon: ScanSearch,
      title: "Abdominal Surgery",
      description: "Diagnosis and surgical treatment of abdominal condition",
    },
    {
      icon: Microscope,
      title: "Biopsy",
      description: "Safe tissue sampling for accurate diagnosis.",
    },
    {
      icon: ShieldPlus,
      title: "Anal Fissure Treatment",
      description: " Medical and surgical care for anal fissures.",
    },
    {
      icon: Scissors,
      title: "Appendectomy",
      description: "Removal of the appendix using modern surgical techniques.",
    },
    {
      icon: HeartPulse,
      title: "Breast Surgery",
      description: "Comprehensive breast surgery and related procedures.",
    },
    {
      icon: Stethoscope,
      title: "Surgical Consultation",
      description: "Professional consultation and treatment planning.",
    },
  ];

  return (
    <div className="experties">
      <p className="experties-title">SERVICES</p>

      <p className="experties-para">
        Providing safe, evidence-based surgical care with modern techniques and
        compassionate treatment.
      </p>

      <div className="service-cards">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="card" key={service.title}>
              <h3>
                <Icon size={28} />
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experties;
