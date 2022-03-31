import "bootstrap/dist/css/bootstrap.min.css";
import "../Feed-Sidebars/Feed-SideBarNews.css";

const NewsBar = () => {
  return (
    <>
      <div className="mainBox11">
        <div className="row innerbox">
          <h2 className="col-8 h2">Linkedin News</h2>{" "}
          <span className="col-1">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-info-square-fill"
              viewBox="0 0 16 16"
              style={{ margin: "5px" }}
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </span>
        </div>
        <div>
          <ul>
            <li className="listItem2">Ukraine: Latest updates</li>{" "}
            <span className="spans">top news - 44,594 readers</span>
            <li className="listItem2">
              Some decisions should be made solo
            </li>{" "}
            <span className="spans">2d ago</span>
            <li className="listItem2">Oscars launch 'review' of Smith slap</li>
            <span className="spans">1d ago</span>
            <li className="listItem2"> Life? there's an app for that</li>{" "}
            <span className="spans">3d ago</span>
            <li className="listItem2"> How to achieve long-term goals</li>{" "}
            <span className="spans">2d ago</span>
          </ul>
        </div>
      </div>
      <div className="hrcontainer">
        <hr className="linebreak5" />
      </div>
      <div className="hrcontainer">
        <ul>
          <span className="spanul">About</span>
          <span className="spanul">Accessibility</span>
          <span className="spanul">Help Center</span>
          <span className="spanul">Privacy & Terms</span>
          <span className="spanul">Ad Choices</span>
          <span className="spanul">Advertising</span>
          <span className="spanul">Businness Services</span>
          <span className="spanul">Get Linkedin app</span>
          <span className="spanul">More</span>
        </ul>
        <img src="" alt="" />
        <span>
          <h6 className="linkedinH5Icon">
            Linked<i className="bi bi-linkedin"></i>
          </h6>
          Corporation 2022
        </span>
      </div>
    </>
  );
};

export default NewsBar;
