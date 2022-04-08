import Tabs from "react-bootstrap/Tabs";
import MyWebsites from "./Projects/websites";
import MyAutomation from "./Projects/automation";
import MyAppProjects from "./Projects/app-projects";

function MyProjects() {
  return (
    <Tabs
      fill
      defaultActiveKey="apps"
      id="projects-tab"
      className="mb-3"
      style={{ marginTop: "10rem" }}
    >
      <Tabs eventKey="apps" title="Apps">
        <MyAppProjects />
      </Tabs>
      <Tabs eventKey="websites" title="Websites">
        <MyWebsites />
      </Tabs>
      <Tabs eventKey="automation" title="Automation">
        <MyAutomation />
      </Tabs>
    </Tabs>
  );
}

export default MyProjects;
