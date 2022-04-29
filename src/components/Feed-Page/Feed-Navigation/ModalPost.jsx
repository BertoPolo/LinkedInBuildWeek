/* eslint-disable no-lone-blocks */
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "./ModalPost.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom"

const ModalPost = ({ show, handleClose, postID }) => {
  const [post, setPost] = useState({
    text: "",
  });
  // const navigate = useNavigate()

  const asyncFunction = async (methodToDo) => {
    try {
      const response = await fetch(
        postID
          ? "https://striveschool-api.herokuapp.com/api/posts/" + postID
          : "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: methodToDo,
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
          },
        }
      );

      if (response.ok) {
        alert("POSTED!!");
      } else {
        alert("we have a problem");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            type="textarea"
            name=""
            id="inputBox44"
            onChange={(e) => setPost({ text: e.target.value })}
            value={post.text}
          />
        </Modal.Body>
        <Modal.Footer>
          {postID ? (
            <>
              <Button
                variant="danger"
                onClick={(handleClose, () => asyncFunction("DELETE"))}
              >
                Delete
              </Button>
              <Button
                variant="success"
                onClick={(handleClose, () => asyncFunction("PUT"))}
              >
                Update
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={(handleClose, () => asyncFunction("POST"))}
              >
                Post!
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPost;
