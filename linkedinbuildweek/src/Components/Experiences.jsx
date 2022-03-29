import { Container, Row, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
const Experiences = () => {
  return (
    <>
      <div className="expiriencePiece">
        <div style={{ marginLeft: "3vh" }}>
          <div className="d-flex justify-content-between">
            <h4>Experience</h4>
            <div className="">
              <i className="bi bi-plus-lg hoverIconBgGray mx-2"></i>
              <i className="bi bi-pencil hoverIconBgGray mx-2 mr-3"></i>
            </div>
          </div>
          <div className="mt-3 d-flex">
            <Image
              className="jobImg"
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1656547200&v=beta&t=X3Fqr32B632PUmiOKPdWCqVXR4nD2AAK8FPmiC-EVYA"
            />
            <div className="">
              <h6 className="my-0">Student</h6>
              <p className="my-0 ml-0">Company · Full-time</p>
              <p className="text-muted ml-0">SinceWhen(Oct 21) · untilWhen ( Present) · 4 mos(duration) </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiences
