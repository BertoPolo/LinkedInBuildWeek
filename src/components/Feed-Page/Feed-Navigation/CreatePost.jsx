import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Image } from "react-bootstrap"
import "./CreatePost.css"
import "./ModalPost.css"
import ModalPost from "./ModalPost"
import SideBarNews from "../Feed-Sidebars/Feed-SideBarProfile"
import SideBarHashtags from "../Feed-Sidebars/Feed-SideBarHashtags"
import NewsBar from "../Feed-Sidebars/Feed-SideBarNews"
import { useEffect, useState } from "react"
import { fetchMyProfile } from "../../MyProfile/fetchMyProfile"

const CreatePost = ({ id }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [myProfile, setMyProfile] = useState(null)

  useEffect(() => {
    setMyProfile(fetchMyProfile)
  }, [])

  return (
    <>
      <div className="mainPageContainer1">
        <div className="firstContainer">
          <SideBarNews />
          <SideBarHashtags />
        </div>
        <div className="middleContainer">
          <Container className="feedBox">
            <Row className="rowFeedBox">
              <div className="col-1 profileImg">
                <Image src="" alt="" />
              </div>
              <div className="col-11">
                <button className="searchBar" type="text" placeholder="Start a post" onClick={handleShow}>
                  <p id="placeholderS">Start a post</p>
                </button>
              </div>
              <div className="row containerSvg">
                <button className="buttonSrc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-card-image"
                    viewBox="0 0 16 16"
                    style={{ color: "rgb(112, 181, 249)", margin: "5px" }}
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                  </svg>
                  <span style={{ margin: "9px", color: "rgb(109, 108, 108)" }}>Photo</span>
                </button>
                <button className="buttonSrc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play-btn-fill"
                    viewBox="0 0 16 16"
                    style={{ color: "rgb(127, 193, 94)", margin: "5px" }}
                  >
                    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
                  <span style={{ margin: "5px", color: "rgb(109, 108, 108)" }}>Video</span>
                </button>
                <button className="buttonSrc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar-date"
                    viewBox="0 0 16 16"
                    style={{ color: "rgb(231, 163, 62)", margin: "5px" }}
                  >
                    <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>
                  <span style={{ margin: "5px", color: "rgb(109, 108, 108)" }}>Event</span>
                </button>
                <button className="buttonSrc">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-newspaper"
                    viewBox="0 0 16 16"
                    style={{ color: "rgb(252, 146,149)", margin: "5px" }}
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                  <span style={{ margin: "5px", color: "rgb(109, 108, 108)" }}>Write article</span>
                </button>
              </div>
            </Row>
          </Container>

          <ModalPost handleClose={handleClose} show={show} id={id} />
        </div>
        <div className="thirdContainer">
          <NewsBar />
        </div>
      </div>
    </>
  )
}

export default CreatePost
