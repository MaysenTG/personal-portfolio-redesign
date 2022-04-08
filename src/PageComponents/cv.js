import { React } from "react";
import "../styling/index.css";

import WorkExperience from '../PageComponents/cv/work';
import EducationExperience from '../PageComponents/cv/education';


function MaysenCV() {
  return (
    <main className="page cv-page">
      <section className="portfolio-block cv">
        <div className="container">
          <WorkExperience />
          <EducationExperience />
        </div>
      </section>
    </main>
  );
}

export default MaysenCV;
