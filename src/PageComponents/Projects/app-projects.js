import { React, Component } from "react";

import { LinearProgress } from "@mui/material";

import { projectFirestore } from "../../firebase/config";
import { onSnapshot, collection, query, getDocs } from "firebase/firestore";

class MyAppProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
      progress: 0,
    };
  }
  componentDidMount = async () => {
    const q = query(collection(projectFirestore, "appProject"));
    // eslint-disable-next-line
    const querySnapshot = await getDocs(q);

    onSnapshot(q, (querySnapshot) => {
      // doc.data() is never undefined for query doc snapshots
      this.setState({ projects: querySnapshot.docs.map((doc) => doc.data()) });
    });

    this.createHTML();

    this.setState({ loading: false });
  };

  createHTML() {
    const appProjects = this.state.projects;

    return (
      <ul className="project__list">
        {appProjects.map((d) => {
          return (
            <li key={d.title} className="project">
              <div className="project__wrapper">
                <img
                  src={d.url}
                  className="project__img"
                  alt="Car subscription project"
                />
                <div className="project__description">
                  <h3 className="project__description--title">{d.title}</h3>
                  <h4 className="project__description--sub-title">{d.skills}</h4>
                  <p className="project__description--para">{d.description}</p>
                  <div className="project__description--links">
                    <a
                      href={d.githubRepo}
                      rel="noreferrer"
                      target="_blank"
                      className="project__description--link"
                    >
                      <i className="icon fa-github-white"></i>
                    </a>

                    {d.livePreview && (
                      <a
                        href={d.livePreview}
                        rel="noreferrer"
                        target="_blank"
                        className="project__description--link"
                      >
                        <i className="icon fa-web-white"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <h1>Loading projects</h1>
          <LinearProgress />
        </div>
      );
    } else {
      return (
        <section id="projects">
          <div className="projects__container">
            <div className="row">
              <h1 className="section__title">Web Apps</h1>
              {this.createHTML()}
            </div>
          </div>
        </section>
      );
    }
  }
}

export default MyAppProjects;