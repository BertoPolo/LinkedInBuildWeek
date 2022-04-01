import "bootstrap/dist/css/bootstrap.min.css";
import "../Feed-Sidebars/Feed-SideBarProfile.css";
import { Row } from "react-bootstrap";

const SideBarNews = () => {
  return (
    <>
      <div id="mainContainer">
        <div id="backgroundImg"></div>
        <div className="imgBox33">
          <img className="profileImg33" src="" alt="" />
        </div>
        <div className="secondBox">
          <p className="name33">Alfonzo</p>
          <p className="title33">Full Stack web Developer</p>
        </div>
        <hr className="linebreak" />

        <div class="thirdBox">
          <Row className="hoverDiv">
            <div className="col-8 ">
              <span className="smallText">Connections</span>{" "}
            </div>
            <div id="r53div" className="col-4">
              <span className="r53">53</span>
            </div>
          </Row>
          <div className="hoverDiv">
            <span className="network">Grow your network</span>{" "}
          </div>
          <div className="innerthirdbox">
            <span className="smallText">Who viewed your profile</span>{" "}
            <span>1</span>
          </div>
        </div>
        <hr className="linebreak" />
        <div className="hoverDiv" style={{ margin: "10px" }}>
          <span className="smallText">Access exlusive tools & insights</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-square-fill"
            viewBox="0 0 16 16"
            id="svgScale"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
          </svg>
          <span className="network2">Try Premium for free</span>
        </div>
        <div className="hoverDiv" style={{ margin: "10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bookmark-fill"
            viewBox="0 0 16 16"
            id="svgScale"
          >
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          </svg>
          <span className="network3">My items</span>
        </div>
      </div>
    </>
  );
};

export default SideBarNews;
