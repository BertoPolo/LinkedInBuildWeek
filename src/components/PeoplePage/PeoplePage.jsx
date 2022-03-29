import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Button, Jumbotron } from "react-bootstrap";
import MyModal from "../MyProfile/MyModal";
import SideBar from "../SideBar";
import Experiences from "../Experiences";

const PeoplePage = () => {
  const [people, setPeople] = useState({});
  const [experiences, setExperience] = useState({});
  const params = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getUsers(params.id).then((res) => setPeople(res));
  }, []);

  useEffect(() => {
    getExperiences(params.id).then((res) => setExperience(res));
  }, []);

  async function getUsers() {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + params.id,
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
        },
      }
    );
    const peopleObj = await response.json();
    return peopleObj;
  }

  const getExperiences = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${params.id}/experiences`,
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
          },
        }
      );
      const peopleExp = await response.json();
      return peopleExp;
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
                  <Image
                    alt="profileUserImage"
                    id="profileUserImage"
                    src={people.image}
                  />
                  <div className="mr-3 modifyIcon">
                    <i className="bi bi-pencil" onClick={handleShow}></i>
                    {show ? (
                      <MyModal show={show} handleClose={handleClose} />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div>
                  <h1>
                    {people.name} {people.surname}
                  </h1>
                  <div className="d-flex flex-column">
                    <span>{people.title}</span>
                    <span>{people.area}-Contact info</span>
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
                <p>{people.bio}</p>
              </div>
            </div>
          </>
        }
        <Experiences data={experiences} />
      </div>
      <div className="col-4">
        <SideBar />
      </div>
    </div>
  );
};

export default PeoplePage;
