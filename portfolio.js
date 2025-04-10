import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./portfolio.css";
import image from "./webdev.jpeg";
import html from "./images/html.webp";
import css from "./images/css.png";
import react from "./images/React.webp";
import js from "./images/javascript.webp";
import node from "./images/nodejs.png";
import db from "./images/mongodb.png";

export default function Portfolio() {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="introduction">
        <img className="img" src={image} />
        <h4>Making Lives Simpler</h4>
        <h1>
          Hi, <br /> I'm Sanjeevani Sahare
        </h1>
        <h2 className="role">
          Front-End Developer | Aspiring MERN Stack Developer
        </h2>
      </section>

      {/* Bio Section */}
      <section className="bio-content">
        <p className="bio">
          <h2 className="bio-header">Bio</h2>
          I’m a passionate Front-End Developer and aspiring MERN Stack Developer
          with a background in Computer Science Engineering. I thrive on
          building clean, responsive, and user-friendly web experiences that
          combine creativity with performance. With a deep interest in modern
          web technologies and UI/UX principles, I continuously explore new
          frameworks and tools to stay ahead of the curve. Whether it's crafting
          seamless interfaces with React or diving into full-stack projects
          using MongoDB, Express, and Node.js — I’m driven by curiosity,
          adaptability, and a desire to grow as a developer. I'm eager to take
          on challenges that push me forward in this fast-paced tech landscape.
        </p>
        <div className="images">
          <img src={html} className="html" />
          <img src={css} className="css" />
          <img src={js} className="js" />
          <img src={node} className="node" />
          <img src={db} className="db" />
          <img src={react} className="react" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="project-container">
        <h2>Projects</h2>
        <div className="project-content">
          {/* Project 1 */}
          <div className="project project1">
            <h3>Meal Finder App</h3>
            <p className="prj-para">
              A dynamic meal browser built using React and the MealDB API,
              allowing users to explore a wide range of meal options in a
              visually engaging card format. The app fetches data in real-time
              and displays meal thumbnails and details with a responsive and
              animated layout.
            </p>
          </div>
          {/* Project 2 */}
          <div className="project project2">
            <h3>To-Do List App</h3>
            <p className="prj-para">
              A lightweight and user-friendly task manager built with React.
              This app helps users stay organized by allowing them to add, view,
              and remove to-do items in real-time. It features a clean UI layout
              with smooth interactions and a responsive design suitable for both
              desktop and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <div className="links">
        <h2 className="contact-header">
          Work With <br />
          Me!
        </h2>
        <div className="link-section">
          <h2>Contact</h2>
          <p>Sanjeevani Sahare</p>
          <div className="tags">
            <a
              href="https://www.linkedin.com/in/sanjeevani-sahare"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/sanie99"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <FaGithub />
            </a>

            <a href="mailto:saharesan99@gmail.com" className="email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Sanjeevani Sahare. Built with ❤️</p>
      </footer>
    </main>
  );
}
