import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap"
import { useState, useEffect } from "react"

const MyModal = ({ show, handleClose }) => {
  const [profile, setProfile] = useState({
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  })

  useEffect(() => {
    fetchInfos()
  }, [])

  const fetchInfos = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
        },
      })
      if (response.ok) {
        let data = await response.json()
        console.log("ïn me", data)
        setProfile({
          name: data.name,
          surname: data.surname,
          email: data.email,
          bio: data.bio,
          title: data.title,
          area: data.area,
        })
      } else {
        alert("PROBLEM")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const editProfile = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile", {
        method: "PUT",
        body: JSON.stringify(profile),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
        },
      })
      if (response.ok) {
        await fetchInfos()
        handleClose()
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }

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
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={profile.name}
                    required
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        name: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="surname"
                    value={profile.surname}
                    required
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        surname: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="email"
                    value={profile.email}
                    required
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Write something about you</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="bio"
                    value={profile.bio}
                    required
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        bio: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="your job"
                    value={profile.title}
                    required
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        title: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Area</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Where did you work"
                    value={profile.area}
                    required
                    onChange={(e) =>
                      setProfile({
                        ...profile,
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
        <Button variant="primary" onClick={editProfile}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal
