import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

/** Short bio + CTA to contact page. */
export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I’ve worked 2+ years as a Data Scientist and  almost an year as an ML specialist,
        focusing on data analysis, neural networks and practical AI models.
        This portfolio collects selected work across DS/ML.
      </p>
      <div style={{ marginTop: 12 }}>
        <Link className="btn" to="/contact">Contact me</Link>
      </div>
    </section>
  );
}
