import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import ExperienceModal from "./ExperienceModal";
import { useParams } from "react-router-dom";

const Experiences = ({ id }) => {
  const [show, setShow] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fetchExperiences = async (id) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          id +
          "/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setExperiences(data);
        console.log("experiences is", experiences);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { id: paramsId } = useParams();
  useEffect(() => {
    fetchExperiences(paramsId);
  }, []);
  return (
    <>
      <div className="expiriencePiece">
        <div style={{ marginLeft: "3vh" }}>
          <div className="d-flex justify-content-between">
            <h4>Experience</h4>
            {paramsId === "me" && (
              <div className="">
                <i
                  className="bi bi-plus-lg hoverIconBgGray mx-2"
                  onClick={handleShow}
                ></i>
                {show ? (
                  <ExperienceModal show={show} handleClose={handleClose} />
                ) : (
                  <></>
                )}
                <i className="bi bi-pencil hoverIconBgGray mx-2 mr-3"></i>
              </div>
            )}
          </div>

          <div className="mt-3 d-flex">
            <Image className="jobImg" src={experiences.image} />
            <div>
              <h6 className="my-0">{experiences.role}</h6>
              <p className="my-0 ml-0">{experiences.company}</p>
              <p className="text-muted ml-0">
                {experiences.startDate} · {experiences.endDate}
              </p>
              <p className="text-muted ml-0">{experiences.area}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
