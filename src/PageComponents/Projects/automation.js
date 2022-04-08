import { React } from "react";
import ProjectTemplate from './project_template';

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_PROJECTS = gql`
  {
    projects(projectType:"Automation") {
      title
      description
      skills
      githubUrl
      previewUrl
      projectType
    }
  }
`;

function MyAppProjects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error ${error.message}`;

  console.log("Data below");
  console.log(data);

  return (
    <section id="projects">
      <div className="projects__container">
        <div className="row">
          <h1 className="section__title">Automation projects</h1>
          <ProjectTemplate data={data} />
        </div>
      </div>
    </section>
  );
}

export default MyAppProjects;
