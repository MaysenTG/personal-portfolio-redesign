import '../../styling/index.css';
import { Component } from "react";
import { CircularProgress } from "@mui/material";

import { projectFirestore } from "../../firebase/config";
import { onSnapshot, collection, query, getDocs } from "firebase/firestore";

class MyAutomation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
    };
  }
  componentDidMount = async () => {
    const q = query(collection(projectFirestore, "automationProjects"));
    // eslint-disable-next-line
    const querySnapshot = await getDocs(q);
    
    onSnapshot(q, (querySnapshot) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      //const data = querySnapshot.docs.map(doc => doc.data())
      //this.setState({ projects: querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id }))})
      this.setState({ projects: querySnapshot.docs.map((doc) => doc.data()) });
    });

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
          <span className="loading-item"><CircularProgress /></span>
        </div>
      );
    } else {
      return (
        <section id="projects">
          <div className="projects__container">
            <div className="row">
              <h1 className="section__title">Automation projects</h1>
              {this.createHTML()}
            </div>
          </div>
        </section>
      );
    }
  }
}

export default MyAutomation;
