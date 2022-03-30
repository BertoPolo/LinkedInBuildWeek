import { Image } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import { useState } from "react";

const SingleExperience = ({ experience }) => {
  const [showModify, setShowModify] = useState(false);
  const handleCloseModify = () => setShowModify(false);
  const handleShowModify = () => setShowModify(true);
  console.log(experience);

  return (
    <div key={experience._id} className="mt-3 d-flex">
      <i
        onClick={handleShowModify}
        className="bi bi-pencil hoverIconBgGray mx-2 "
      >
        {showModify ? (
          <ExperienceModal
            onHide={handleCloseModify}
            myExperience={experience}
            show={showModify}
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
  );
};

export default SingleExperience;
