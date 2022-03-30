import { Image } from "react-bootstrap"
import { useState, useEffect } from "react"
// import { useParams } from "react-router-dom"

const CreatePost = () => {
  const [post, setPost] = useState({})

  const posting = () => {
    try {
      const response = fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "Application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
        },
      })

      if (response.ok) {
        alert("posted")
      } else {
        alert("we have a problem,bro")
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <div className="componentPiece">
        <div style={{ marginLeft: "3vh" }}>
          <div className="d-flex ">
            <Image
              id="profilePhotoToPost"
              src="https://4.bp.blogspot.com/-JhuMSe_N8kM/TlECIiHEq6I/AAAAAAAAUao/LwzE1ux2oSg/s320/patodonaldparaimprimir4.gif"
            />
            <input type="text" className="rounded-pill" id="postInput" placeholder="Start a post" />
          </div>

          <div className="d-flex justify-content-between">
            <div className="pointer">
              <i className="bi bi-image"></i>
              <span className="mx-3">Photo</span>
            </div>

            <div className="pointer">
              <i className="bi bi-play-btn-fill"></i>
              <span className="mx-3">Video</span>
            </div>

            <div className="pointer">
              <i className="bi bi-calendar-date"></i>
              <span className="mx-3">Event</span>
            </div>

            <div className="pointer">
              <i className="bi bi-file-ruled"></i>
              <span className="mx-3">Write article</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CreatePost
