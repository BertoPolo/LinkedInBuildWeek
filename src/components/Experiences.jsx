import { useState, useEffect } from "react";
import ExperienceModal from "./ExperienceModal";
import SingleExperience from "./SingleExperience";

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
              <SingleExperience experience={experience} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Experiences;
