import { React } from "react";
import ReactDOM from "react-dom";
import "./styling/bootstrap.min.css";
import IndexPage from "./PageComponents/IndexPage";
import Footer from "./PageComponents/Footer";
import MyProjects from "./PageComponents/my-projects";
import ContactMe from "./PageComponents/contact-me";
import MaysenCV from "./PageComponents/cv";

import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient" aria-label="Main website navigation">
      <div className="container">
        <StyledLink className="navbar-brand logo" to="/">
          Maysen Greenwood
        </StyledLink>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navbarNav"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" id="navigationContainer">
            <li className="nav-item">
              <StyledLink className="nav-link active" to="/">
                Home
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink
                className="nav-link active"
                id="projects-nav-btn"
                to="/my-projects"
              >
                Projects
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link active" to="/cv">
                CV
              </StyledLink>
            </li>
            <li className="nav-item">
              <StyledLink className="nav-link active" to="/contact">
                Contact me
              </StyledLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Switch>
      <Route exact path="/">
        <IndexPage />
      </Route>
      <Route path="/my-projects">
        <MyProjects />
      </Route>
      <Route path="/contact">
        <ContactMe />
      </Route>
      <Route path="/cv">
        <MaysenCV />
      </Route>
      <Route
        path="/admin"
        component={() => {
          window.location.href =
            "https://maysentg.github.io/personal-portfolio-admin/";
          return null;
        }}
      />
      <Route path="*">
        <Redirect from="*" to="/" />
      </Route>
    </Switch>

    <Footer />
  </Router>,
  rootElement
);
