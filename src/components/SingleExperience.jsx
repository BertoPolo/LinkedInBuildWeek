import { Image } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import { useState } from "react";
import { parseISO, format } from "date-fns";

const SingleExperience = ({ experience, fetchExperiences, id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div key={experience._id} className="mt-3 d-flex">
      {id === "62416e7ed339840015c883b6" && (
        <>
          <i
            onClick={handleShow}
            className="bi bi-pencil hoverIconBgGray mx-2 "
          ></i>
          <ExperienceModal
            handleClose={handleClose}
            userId={experience.user}
            experience={experience}
            show={show}
            fetchExperiences={fetchExperiences}
          />
        </>
      )}
      <Image className="jobImg" src={experience.image} />
      <div className="ml-3">
        <h6 className="my-0">{experience.role}</h6>
        <></>
        <p className="my-0 ml-0">{experience.company}</p>
        <p className="text-muted ml-0">
          {format(parseISO(experience.startDate), " do MMMM yyyy")} ·{" "}
          {experience.endDate &&
            format(parseISO(experience.endDate), "do MMMM  yyyy")}
        </p>
        <p className="text-muted ml-0">{experience.area}</p>
      </div>
    </div>
  );
};

export default SingleExperience;
