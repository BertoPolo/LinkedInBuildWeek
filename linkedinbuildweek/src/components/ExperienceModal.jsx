import { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Modal, Button, Container, Row, Col } from "react-bootstrap";

const ExperienceModal = ({ show, handleClose }) => {
  const [experience, setExperience] = useState({
    role: "",
    description: "",
    company: "",
    startDate: "",
    endDate: "",
    image: "",
    area: "",
  });

  const params = useParams();

  const getExperiences = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${params.id}/experiences/`,
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
        let data = await response.json();
        console.log("ïn me", data);
        setExperience({
          role: data.role,
          description: data.description,
          company: data.company,
          startDate: data.startDate,
          endDate: data.endDate,
          image: data.image,
          area: data.area,
        });
      } else {
        alert("PROBLEM");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit intro</Modal.Title>
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
                    placeholder="surname"
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
                    placeholder="email"
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
                    placeholder="bio"
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
                    placeholder="your job"
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
        <Button variant="primary" onClick={getExperiences}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ExperienceModal;
