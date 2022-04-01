import { useEffect, useState } from "react";
import axios from "axios";

import { Form, Modal, Button, Container, Row, Col } from "react-bootstrap";

const ExperienceModal = ({
  show,
  handleClose,
  userId,
  fetchExperiences,
  fetchData,
  ...rest
}) => {
  const [experience, setExperience] = useState(
    rest.experience
      ? rest.experience
      : {
          role: "",
          description: "",
          startDate: new Date(),
          endDate: new Date(),
          company: "",
          area: "",
          image: "",
        }
  );
  const [imgFile, setImgFile] = useState(null);
  const handleFile = (e) => {
    setImgFile(e.target.files[0]);
  };
  function handleUpdate() {
    let img = imgFile;

    let formDataExp = new FormData();

    formDataExp.append("experience", img);
    formDataExp.append("name", userId);

    axios({
      url: `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${rest.experience._id}/picture`,
      method: "POST",
      headers: {
        authorization:
          "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
      },
      data: formDataExp,
    }).then(
      (data) => {
        fetchExperiences(userId);
        handleClose();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  const submitExperiences = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`,
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
          },
        }
      );
      if (response.ok) {
        await fetchExperiences(userId);
        handleClose();
      } else {
        alert("PROBLEM");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const modifyExperience = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${rest.experience._id}`,
        {
          method: "PUT",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
          },
        }
      );
      if (response.ok) {
        await fetchExperiences(userId);
        handleUpdate();
        handleClose();
      } else {
        alert("PROBLEM with the");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteExperience = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${rest.experience._id}`,
        {
          method: "DELETE",
          body: JSON.stringify(experience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
          },
        }
      );
      if (response.ok) {
        await fetchExperiences(userId);
        handleClose();
      } else {
        alert("PROBLEM with the");
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log("rest is", rest);
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{rest.experience ? "Edit" : "Create"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <div>
                  <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      value={experience.role}
                      required
                      onChange={(e) =>
                        setExperience({
                          ...experience,
                          role: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="description"
                      value={experience.description}
                      required
                      onChange={(e) =>
                        setExperience({
                          ...experience,
                          description: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="company"
                      value={experience.company}
                      required
                      onChange={(e) =>
                        setExperience({
                          ...experience,
                          company: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Start date</Form.Label>
                    <Form.Control
                      type="date"
                      value={experience.startDate}
                      onChange={(e) =>
                        setExperience({
                          ...experience,
                          startDate: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>End date</Form.Label>
                    <Form.Control
                      type="date"
                      value={experience.endDate}
                      onChange={(e) =>
                        setExperience({
                          ...experience,
                          endDate: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <p>Choose an Image</p>
                    <input
                      type="file"
                      name="expImg"
                      required
                      onChange={(e) => handleFile(e)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Where did you work"
                      value={experience.area}
                      required
                      onChange={(e) =>
                        setExperience({
                          ...experience,
                          area: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {rest.experience ? (
            <>
              <Button variant="primary" onClick={modifyExperience}>
                Update
              </Button>
              <Button variant="danger" onClick={deleteExperience}>
                Delete
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={submitExperiences}>
              Save Changes
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ExperienceModal;
