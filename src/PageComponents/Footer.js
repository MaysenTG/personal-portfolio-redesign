import React from "react";
import styled from "styled-components";
import {
  Link
} from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Footer() {
  return (
      <footer className="page-footer">
        <div className="container">
          <div className="links">
            <StyledLink to="/">About me</StyledLink>
            <StyledLink to="/contact">Contact me</StyledLink>
            <StyledLink to="/my-projects">Projects</StyledLink>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/maysen.greenwood" target="_blank" rel="noreferrer">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="https://www.instagram.com/maysengreenwood/?hl=en" target="_blank" rel="noreferrer">
              <i className="icon ion-social-instagram-outline"></i>
            </a>
            <a href="https://github.com/MaysenTG" target="_blank" rel="noreferrer">
              <i className="icon ion-social-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/maysen-greenwood/" target="_blank" rel="noreferrer">
              <i className="icon ion-social-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
