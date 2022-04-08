import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { CircularProgress } from "@mui/material";

const GET_WORK_CV = gql`
  {
    experiences(experienceType: "Work") {
      id
      position
      title
      location
      tenure
      description
    }
  }
`;

function WorkExperience() {
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
    <div className="work-experience group">
      <div className="heading">
        <h2 className="text-center">Work Experience</h2>
      </div>

      {data.experiences
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .map((job) => (
          <div className="item" key={job.id}>
            <div className="row">
              <div className="col-6">
                <h3>{job.position}</h3>
                <h4 className="organization">{job.title}</h4>
                <p className="text-muted location">{job.location !== null ? job.location : ""}</p>
              </div>
              <div className="col-md-6">
                <span className="period">{job.tenure}</span>
              </div>
              <p className="text-muted">{job.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default WorkExperience;
