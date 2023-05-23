import React from "react";

import "./commonSection.css";

import { Container } from "reactstrap";

const CommonSection = ({ title, para }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h2>{title}</h2>
        <h5 className="text-white">{para}</h5>
      </Container>
    </section>
  );
};

export default CommonSection;
