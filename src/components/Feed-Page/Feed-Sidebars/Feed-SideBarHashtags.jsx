import "bootstrap/dist/css/bootstrap.min.css";

import "../Feed-Sidebars/Feed-SideBarHashtag.css";

const SideBarHashtags = () => {
  return (
    <div className="mainContainer22">
      <div>
        <ul>
          <p className="header">Recent</p>
          <li className="listItem">branding</li>
          <li className="listItem">startups</li>
          <li className="listItem">marketing</li>
          <li className="listItem">managment</li>
          <li className="listItem">leanstartups</li>
        </ul>
      </div>
      <div>
        <p className="grups">Groups</p>
      </div>
      <div className="boxHashtag">
        <span className="events">Events</span>
        <button>+</button>
      </div>
      <div>
        <p className="follow">Followed Hashtags</p>
        <div>
          <ul>
            <li className="listItem">branding</li>
            <li className="listItem">startups</li>
            <li className="listItem">marketing</li>
          </ul>
        </div>
      </div>
      <div className="discover">
        <p>Discover more</p>
      </div>
    </div>
  );
};

export default SideBarHashtags;
