function ProjectTemplate(props) {
  return (
    <ul className="project__list">
      {props.data.projects.map((project) => {
        return (
          <li key={project.title} className="project">
            <div className="project__wrapper">
              <img
                src={"http://localhost:3000"+project.imageUrl}
                className="project__img"
                alt="Car subscription project"
              />
              <div className="project__description">
                <h3 className="project__description--title">{project.title}</h3>
                <h4 className="project__description--sub-title">
                  {project.skills}
                </h4>
                <p className="project__description--para">
                  {project.description}
                </p>
                <div className="project__description--links">
                  <a
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="project__description--link"
                  >
                    <i className="icon fa-github-white"></i>
                  </a>

                  <a
                    href={project.previewUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="project__description--link"
                  >
                    <i className="icon fa-web-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectTemplate;