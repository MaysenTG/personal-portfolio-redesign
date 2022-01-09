import React from "react";
import styled from "styled-components";
import {
  Link
} from "react-router-dom";

function Footer() {
  return (
      <footer className="page-footer">
        <div className="container">
          <div className="links">
            <Link to="/">About me</Link>
            <Link to="/contact">Contact me</Link>
            <Link to="/my-projects">Projects</Link>
            <a href="/admin">Admin</a>
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
          </div>
        </div>
      </footer>
  );
}

export default Footer;
