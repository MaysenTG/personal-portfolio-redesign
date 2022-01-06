import portrait from "../media/self-portrait.webp";
import { getDatabase, ref, onValue } from "firebase/database";
import { React, Component } from "react";
import "../styling/bootstrap.min.css";
import parse from "html-react-parser";

import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: null,
      
      loading: true,
      
      homePageIntro: {
        description: "",
      },
      homePageSkills: {
        skill_1: {
          name: "",
          description: ""
        },
        skill_2: {
          name: "",
          description: ""
        },
        skill_3: {
          name: "",
          description: ""
        }
      },
      homePageButton: {
        label: ""
      }
    };
  }

  componentDidMount = () => {
    const db = getDatabase();
    const starCountRef = ref(db, "homepageData/0");

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({ allData: data });
      this.setState({ homePageSkills: data["homepageSkills"] });
      this.setState({
        homePageIntro: data["homepageOther"]["homepageIntro"],
      });
      this.setState({
        homePageButton: data["homepageOther"]["homepageProjectsButton"],
      });
      
      this.setState({ loading: false });
    });
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
                  <h3 className="card-title">
                    {this.state.homePageSkills.skill_1["name"]}
                  </h3>
                  {this.state.loading ? (
                    <p className="card-text">
                      <CircularProgress />
                    </p>
                  ) : (
                    <p className="card-text">
                      {this.state.homePageSkills.skill_1["description"]}
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
                  <h3 className="card-title">
                    {this.state.homePageSkills.skill_2["name"]}
                  </h3>
                    {this.state.loading ? (
                      <p className="card-text">
                        <CircularProgress />
                      </p>
                    ) : (
                      <p className="card-text">
                        {this.state.homePageSkills.skill_2["description"]}
                      </p>
                    )}
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
                    {this.state.homePageSkills.skill_3["name"]}
                  </h3>
                    {this.state.loading ? (
                      <p className="card-text">
                        <CircularProgress />
                      </p>
                    ) : (
                      <p className="card-text">
                        {this.state.homePageSkills.skill_3["description"]}
                      </p>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <h1>Loading</h1>
          <span className="loading-item"><CircularProgress /></span>
        </div>
      );
    } else {
      return (
        <main className="page landing-page">
          <section className="portfolio-block block-intro">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${portrait})` }}
            ></div>
            <div className="container">
              <div className="about-me">
                <p>{parse(this.state.homePageIntro.description)}</p>
                <Link
                  className="btn btn-outline-primary"
                  id="main-projects-btn"
                  to="/my-projects"
                >
                  {this.state.homePageButton.label}
                </Link>
              </div>
            </div>
          </section>

          {this.createPage()}
        </main>
      );
    }
  }
}

export default IndexPage;
