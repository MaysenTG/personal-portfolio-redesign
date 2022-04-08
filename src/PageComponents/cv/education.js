import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CircularProgress } from "@mui/material";

const GET_WORK_CV = gql`
  {
    experiences(experienceType: "Education") {
      position
      title
      tenure
      description
    }
  }
`;

function EduExperience() {
  const { loading, error, data } = useQuery(GET_WORK_CV);

  if (loading) {
    return (
      <div className="loading-container">
        <h1>Loading CV</h1>
        <span className="loading-item">
          <CircularProgress />
        </span>
      </div>
    );
  }

  if (error) return `Error ${error.message}`;

  return (
    <div className="education group">
      <div className="heading">
        <h2 className="text-center">Education</h2>
      </div>

      {data.experiences.map((edu) => (
        <div className="item" key={`${edu.id}-edu`}>
          <div className="row">
            <div className="col-md-6">
              <h3>{edu.position}</h3>
              <h4 className="organization">{edu.title}</h4>
            </div>
            <div className="col-6">
              <span className="period">{edu.tenure}</span>
            </div>
            <p className="text-muted">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EduExperience;
