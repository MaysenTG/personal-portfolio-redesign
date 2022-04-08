import portrait from "../media/self-portrait.webp";

import { React } from "react";
import "../styling/bootstrap.min.css";

import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_HOMEPAGE = gql`
  {
    homepages {
      subtext
      buttonLabel
      skill1
      skill1Title
      skill2
      skill2Title
      skill3
      skill3Title
    }
  }
`;

function IndexPage() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE);

  if (error) return `Error ${error.message}`;
  if (loading)
    return (
      <div className="loading-container">
        <h1>Loading</h1>
        <span className="loading-item">
          <CircularProgress />
        </span>
      </div>
    );

  return (
    <main className="page landing-page">
      <section style={{"margin-top": "-2rem"}} className="portfolio-block block-intro">
        <div
          className="avatar"
          style={{ backgroundImage: `url(${portrait})` }}
        ></div>
        <div className="container">
          <div className="about-me">
            <p>{data.homepages[0].subtext}</p>
            <Link
              className="btn btn-outline-primary"
              id="main-projects-btn"
              to="/my-projects"
            >
              {data.homepages[0].buttonLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="portfolio-block skills">
        <div className="container">
          <div style={{"margin-top": "-3rem"}}className="heading">
            <h2>Skills</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-star-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    {data.homepages[0].skill1Title}
                  </h3>
                  <p className="card-text">{data.homepages[0].skill1}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-lightbulb-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    {data.homepages[0].skill2Title}
                  </h3>
                  <p className="card-text">{data.homepages[0].skill2}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card special-skill-item border-0">
                <div className="card-header bg-transparent border-0">
                  <i className="icon ion-ios-gear-outline"></i>
                </div>
                <div className="card-body">
                  <h3 className="card-title">
                    {data.homepages[0].skill3Title}
                  </h3>
                  <p className="card-text">{data.homepages[0].skill3}</p>
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
