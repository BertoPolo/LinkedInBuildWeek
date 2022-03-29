import { Image } from "react-bootstrap"
// import { Link } from "react-router-dom"

const Experiences = (data) => {
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
            <Image className="jobImg" src={data.image} />
            <div>
              <h6 className="my-0">{data.role}</h6>
              <p className="my-0 ml-0">{data.company}</p>
              <p className="text-muted ml-0">
                {data.startDate} · {data.endDate}
              </p>
              <p className="text-muted ml-0">{data.area}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiences
