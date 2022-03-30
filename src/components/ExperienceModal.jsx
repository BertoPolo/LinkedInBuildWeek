import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Modal, Button, Container, Row, Col } from "react-bootstrap";

const ExperienceModal = ({ show, handleClose, myExperience }) => {
  const [experience, setExperience] = useState(myExperience);

  const params = useParams();
  const me = params.id;

  const submitExperiences = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${me}/experiences/`,
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
        handleClose();
      } else {
        alert("PROBLEM");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(experience.id);
  const modifyExperience = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${me}/experiences/`,
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
        handleClose();
      } else {
        alert("PROBLEM");
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(myExperience._id);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit intro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <div onSubmit={submitExperiences}>
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
                    required
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
                    required
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                        endDate: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="img url..."
                    value={experience.image}
                    required
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                        image: e.target.value,
                      })
                    }
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
        <Button variant="primary" onClick={submitExperiences}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ExperienceModal;
