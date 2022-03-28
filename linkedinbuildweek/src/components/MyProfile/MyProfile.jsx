import { fetchMyProfile } from "./fetchMyProfile";
import { useEffect, useState } from "react";
import { Image, Button, Jumbotron } from "react-bootstrap";
import "./MyProfile.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState([]);
  useEffect(() => {
    fetchMyProfile().then((res) => setMyProfile(res));
  }, []);
  console.log(myProfile);
  return (
    <div>
      {
        <div>
          <div>
            <Image
              alt="profileBgCover"
              id="profileBgCover"
              src="https://picsum.photos/200/300"
            />
          </div>
          <div id="profileInfosContainer">
            <div className="d-flex justify-content-between align-items-end">
              <Image
                alt="profileUserImage"
                id="profileUserImage"
                src={myProfile.image}
              />
              <div className="mr-3 modifyIcon">
                <i class="bi bi-pencil"></i>
              </div>
            </div>
            <div>
              <h1>
                {myProfile.name} {myProfile.surname}
              </h1>
              <div className="d-flex flex-column">
                <span>{myProfile.title}</span>
                <span>{myProfile.area}-Contact info</span>
              </div>
              <div className="mt-2">1 connection</div>
              <div className="mt-2">
                <Button className="btnProfile" variant="primary">
                  Open to
                </Button>
                <Button className="btnProfile mx-3" variant="outline-primary">
                  Add profile section
                </Button>
                <Button className="btnProfile" variant="outline-secondary">
                  More
                </Button>
              </div>
              <Jumbotron
                style={{
                  width: "40%",
                  borderRadius: "0.7rem",
                  backgroundColor: "#e9e5df",
                }}
                className="mt-4 p-2 d-flex flex-column"
              >
                <div className="d-flex justify-content-between">
                  <span className="font-weight-bold" style={{ fontSize: 15 }}>
                    Open to work
                  </span>
                  <div className="modifyIcon">
                    <i class="bi bi-pencil"></i>
                  </div>
                </div>
                <span style={{ fontSize: 13 }}>Full Stack Engineer roles</span>
                <span
                  className="font-weight-bold"
                  id="seeMore"
                  style={{ fontSize: 13, color: "blue" }}
                >
                  See all details
                </span>
              </Jumbotron>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MyProfile;