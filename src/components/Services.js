import React from "react";

import { services } from "../data.js";

import Title from "./Title";
import Service from "./Service.js";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />
      <div className="section-center services-center">
        {services.map(service => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
