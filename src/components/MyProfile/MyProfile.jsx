import { fetchMyProfile } from "./fetchMyProfile";
import { useEffect, useState } from "react";
import { Image, Button, Jumbotron } from "react-bootstrap";
import "./MyProfile.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyModal from "./MyModal";
import SideBar from "../SideBar";
import Experiences from "../Experiences";
import { useParams } from "react-router-dom";
import MyFooter from "../MyFooter";
import MyProfilePictureModal from "./MyProfilePictureModal";

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState(null);
  const [show, setShow] = useState(false);
  const [showMyPictureModal, setShowMyPictureModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosePicture = () => setShowMyPictureModal(false);
  const handleShowPicture = () => setShowMyPictureModal(true);
  const { id } = useParams();
  const fetchData = async (param) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + param,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMyProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, []);
  return myProfile ? (
    <div className="row">
      <div className="col-8">
        {
          <>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: "1rem",
                marginTop: "2rem",
                backgroundColor: "white",
              }}
            >
              <div>
                <Image
                  alt="profileBgCover"
                  id="profileBgCover"
                  src="https://picsum.photos/200/300"
                />
              </div>
              <div id="profileInfosContainer">
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                    <Image
                      alt="profileUserImage"
                      id="profileUserImage"
                      src={myProfile.image}
                    />
                    {id === "me" && (
                      <>
                        <i
                          className="bi bi-camera cameraProfileIcon"
                          onClick={handleShowPicture}
                        ></i>
                        {showMyPictureModal ? (
                          <MyProfilePictureModal
                            show={showMyPictureModal}
                            id={myProfile._id}
                            handleClosePicture={handleClosePicture}
                            myProfile={myProfile}
                            fetchData={fetchData}
                          />
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </div>
                  {id === "me" && (
                    <div className="mr-3 modifyIcon">
                      <i className="bi bi-pencil" onClick={handleShow}></i>
                      {show ? (
                        <MyModal
                          show={show}
                          handleClose={handleClose}
                          fetchData={fetchData}
                          myProfile={myProfile}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  )}
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
                    <Button
                      className="btnProfile mx-3"
                      variant="outline-primary"
                    >
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
                      <span
                        className="font-weight-bold"
                        style={{ fontSize: 15 }}
                      >
                        Open to work
                      </span>
                      <div className="modifyIcon">
                        <i className="bi bi-pencil"></i>
                      </div>
                    </div>
                    <span style={{ fontSize: 13 }}>
                      Full Stack Engineer roles
                    </span>
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

            <div
              style={{
                marginTop: "1rem",
                border: "1px solid gray",
                borderRadius: "1rem",
                backgroundColor: "white",
              }}
            >
              <div style={{ marginLeft: "3vh" }}>
                <h1>About</h1>
                <p>{myProfile.bio}</p>
              </div>
            </div>
            <Experiences fetchData={fetchData} id={myProfile._id} />
          </>
        }
      </div>
      <div className="col-4">
        <SideBar />
      </div>
      <MyFooter />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default MyProfile;
