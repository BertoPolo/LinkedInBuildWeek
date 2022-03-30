import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import ExperienceModal from "./ExperienceModal";

const Experiences = ({ id }) => {
  const [show, setShow] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModify = () => setShowModify(false);
  const handleShowModify = () => setShowModify(true);
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
        setExperiences(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchExperiences(id);
  }, []);
  return (
    experiences && (
      <>
        <div className="expiriencePiece">
          <div style={{ marginLeft: "3vh" }}>
            <div className="d-flex justify-content-between">
              <h4>Experience</h4>
              {id === "62416e7ed339840015c883b6" && (
                <div className="">
                  <i
                    className="bi bi-plus-lg hoverIconBgGray mx-2"
                    onClick={handleShow}
                  ></i>
                  {show ? (
                    <ExperienceModal
                      myExperience={experiences}
                      show={show}
                      handleClose={handleClose}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
            {experiences.map((experience) => (
              <div key={experience._id} className="mt-3 d-flex">
                <i
                  onClick={handleShowModify}
                  className="bi bi-pencil hoverIconBgGray mx-2 "
                >
                  {showModify ? (
                    <ExperienceModal
                      myExperience={experiences}
                      show={showModify}
                      handleClose={handleCloseModify}
                    />
                  ) : (
                    <></>
                  )}
                </i>
                <Image className="jobImg" src={experience.image} />
                <div>
                  <h6 className="my-0">{experience.role}</h6>
                  <></>
                  <p className="my-0 ml-0">{experience.company}</p>
                  <p className="text-muted ml-0">
                    {experience.startDate} · {experience.endDate}
                  </p>
                  <p className="text-muted ml-0">{experience.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Experiences;
