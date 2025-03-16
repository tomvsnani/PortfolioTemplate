import ProfileObject from "../../Customize/Customise";
import projects from "../../Customize/ProjectOptions";
import ProfileSection from "./ProfileSection";
import Project from "./ProjectsSection";

const HomePage = () => {
  return (
    <>
      <ProfileSection {...ProfileObject} />
      <Project projects = {projects}/>
    </>
  );
};

export default HomePage;
