import portrait from "../media/self-portrait.webp";

import React from "react";
import "../styling/bootstrap.min.css";

import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <main className="page landing-page">
      <section className="portfolio-block block-intro">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${portrait})` }}
        ></div>
        <div className="container">
          <div className="about-me">
            <p>
              Hi! I'm&nbsp;<strong>Maysen </strong>and<strong>&nbsp;</strong>I
              <strong>&nbsp;</strong>work as a front end developer. I have a
              passion for minimal and easy to use interfaces.
            </p>
            <Link className="btn btn-outline-primary" id="main-projects-btn" to="/my-projects">
              My Projects
            </Link>
          </div>
        </div>
      </section>
      <section className="portfolio-block skills">
        <div className="container">
          <div className="heading">
            <h2>Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-star-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Web Design</h3>
                  <p className="card-text">
                    I focus on creating mobile responsive website using ReactJS.
                    I utlize CSS frameworks (such as Bootstrap, MaterialUI,
                    Tailwind) but am not afraid to use my own custom CSS if I
                    believe I will get a better result. This is important
                    especially for custom mobile responsive CSS queries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-lightbulb-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Interface Design</h3>
                  <p className="card-text">
                    Making appealing websites is crucial in the modern internet.
                    It's important to showcase all aspects of the website in one
                    place and grab the attention of the user. I make use of
                    appealing websites using clear layouts, and minimal/clean
                    colours.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-gear-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">Database integration</h3>
                  <p className="card-text">
                    I have extensive knowledge of working with JSON databases -
                    more specifically, Firestore Firebase. Using a database
                    makes sense for large scale projects, and as I pride myself
                    on a responsive/fast website, a database only makes sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default IndexPage;
