import { React, Component } from "react";
import "../styling/index.css";
import { CircularProgress } from "@mui/material";
import parse from "html-react-parser";
import { getDatabase, ref, onValue } from "firebase/database";

class MaysenCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education_json: [],
      work_json: [],
      skills_json: [],
      hobbies_json: [],

      firestoreJSONObj: ["education", "work", "skills", "hobbies"],
      loading: true,
    };
  }

  componentDidMount() {
    const db = getDatabase();

    this.state.firestoreJSONObj.map(async (jsonItem) => {
      let stateName = jsonItem + "_json";
      const starCountRef = ref(db, jsonItem);

      await onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        this.setState({ [stateName]: data.map((item) => item) });
      });
    });

    this.setState({ loading: false });
  }

  createCV() {
    return (
      <main className="page cv-page">
        <section className="portfolio-block cv">
          <div className="container">
            <div className="work-experience group">
              <div className="heading">
                <h2 className="text-center">Work Experience</h2>
              </div>

              {this.state.work_json
                .sort(function (a, b) {
                  return b.id - a.id;
                })
                .map((job) => (
                  <div className="item" key={job.id}>
                    <div className="row">
                      <div className="col-6">
                        <h3>{job.position}</h3>
                        <h4 className="organization">{job.company}</h4>
                        <p className="text-muted location">{job.location}</p>
                      </div>
                      <div className="col-md-6">
                        <span className="period">{job.tenure}</span>
                      </div>
                      <p className="text-muted">{parse(job.description)}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="education group">
              <div className="heading">
                <h2 className="text-center">Education</h2>
              </div>

              {this.state.education_json.map((edu) => (
                <div className="item" key={`${edu.id}-edu`}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3>{edu.type}</h3>
                      <h4 className="organization">{edu.insitution}</h4>
                    </div>
                    <div className="col-6">
                      <span className="period">{edu.timeframe}</span>
                    </div>
                    <p className="text-muted">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="group">
              <div className="row">
                <div className="col-md-6">
                  <div className="skills portfolio-info-card">
                    <h2>Skills</h2>
                    {this.state.skills_json.map((skill) => (
                      <div key={`${skill.id}-skill`}>
                        <h3>{skill.language}</h3>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            aria-valuenow={skill.widthPercentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${skill.widthPercentage}%` }}
                          >
                            <span className="visually-hidden">
                              {skill.widthPercentage}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-info portfolio-info-card">
                    <h2>Contact Info</h2>
                    <div className="row">
                      <div className="col-1">
                        <i className="icon ion-person icon"></i>
                      </div>
                      <div className="col-9">
                        <span>Maysen Greenwood</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="icon ion-ios-telephone icon"></i>
                      </div>
                      <div className="col-9">
                        <span>+64 027 310 2660</span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="icon ion-at icon"></i>
                      </div>
                      <div className="col-9">
                        <span>greenwood.maysen@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {this.state.hobbies_json.map((item) => (
              <div className="hobbies group" key={`${item.id}-hobbies`}>
                <div className="heading">
                  <h2 className="text-center">Hobbies</h2>
                </div>
                <p className="text-center text-muted">
                  {parse(item.description)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <h1>Loading CV</h1>
          <CircularProgress />
        </div>
      );
    } else {
      return <>{this.createCV()}</>;
    }
  }
}

export default MaysenCV;
