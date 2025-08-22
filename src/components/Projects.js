// src/components/Projects.js
import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.css";

/** Map project titles from data file to Library category keys. */
const TITLE_TO_CATEGORY_KEY = {
  "Data Analysis": "analysis",
  "Data visualization": "visualization",
  "Data Mining": "mining",
  "Basic Machine Learning Models": "ml",
  "Neural Network Models": "nn",
  "Reinforcement Learning Models": "rl",
};

/** Grid of portfolio categories. Entire card is clickable. */
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => {
          const catKey = TITLE_TO_CATEGORY_KEY[p.title] ?? "analysis";
          return (
            <Link
              key={p.id}
              to={`/library?category=${catKey}`}
              className="project-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>{p.title}</h3>
              <p className="muted" style={{ marginTop: 8 }}>{p.description}</p>
              {Array.isArray(p.tech) && p.tech.length > 0 && (
                <p className="tech-stack">{p.tech.join(" • ")}</p>
              )}
            </Link>
          );
        })}
      </div>

      {/* “Show all projects” -> default Library view */}
      <div style={{ marginTop: 32, textAlign: "center" }} id="btn-div">
        <Link className="btn" to="/library">Show all projects</Link>
      </div>
    </section>
  );
}
