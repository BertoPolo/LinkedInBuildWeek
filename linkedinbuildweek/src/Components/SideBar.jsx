import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./SideBarSection";
import { Button } from "react-bootstrap";
import { useState } from "react";

const SideBar = () => {
  const [heightButton, setHeightButton] = useState("480px");

  return (
    <>
      <div style={{ height: heightButton }} className="sideBarBox">
        <Section />
      </div>
      <Button
        onClick={() =>
          heightButton === "480px"
            ? setHeightButton("800px")
            : setHeightButton("480px")
        }
        id="showMoreButton"
      >
        Show more
      </Button>
    </>
  );
};

export default SideBar;
