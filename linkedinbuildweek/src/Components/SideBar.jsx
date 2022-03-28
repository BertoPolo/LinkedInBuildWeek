import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./SideBarSection";

const SideBar = () => {
  return (
    <>
      <div className="sideBarBox">
        <Section />
      </div>
      <button className="showMoreButton">Show more</button>
    </>
  );
};

export default SideBar;
