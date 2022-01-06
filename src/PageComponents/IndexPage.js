import portrait from "../media/self-portrait.webp";
import { getDatabase, ref, onValue } from "firebase/database";
import { React, Component } from "react";
import "../styling/bootstrap.min.css";

import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageSkills: {
        webDesign: {
          description: "",
        },
        interfaceDesign: {
          description: "",
        },
        dbIntegration: {
          description: "",
        },
      },
      loading: true,
    };
  }

  componentDidMount = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "homepageSkills");

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({ homePageSkills: data });
    });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  createPage() {
    return (
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
                  {this.state.loading ? (
                    <p className="card-text">
                      <CircularProgress />
                    </p>
                  ) : (
                    <p className="card-text">
                      {this.state.homePageSkills.webDesign["description"]}
                    </p>
                  )}
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
                    {this.state.loading ? (
                      <p className="card-text">
                        <CircularProgress />
                      </p>
                    ) : (
                      <p className="card-text">
                        {this.state.homePageSkills.interfaceDesign["description"]}
                      </p>
                    )}
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
                    {this.state.loading ? (
                      <p className="card-text">
                        <CircularProgress />
                      </p>
                    ) : (
                      <p className="card-text">
                        {this.state.homePageSkills.dbIntegration["description"]}
                      </p>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
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
              <Link
                className="btn btn-outline-primary"
                id="main-projects-btn"
                to="/my-projects"
              >
                My Projects
              </Link>
            </div>
          </div>
        </section>
        
        {this.createPage()}
      </main>
    );
  }
}

export default IndexPage;
