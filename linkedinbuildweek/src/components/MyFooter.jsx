import { Container, Row, Col, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyFooter = () => {
  return (
    <footer className="text-muted">
      <Container>
        <Row>
          <h5 className="linkedinH5Icon">
            Linked<i className="bi bi-linkedin"></i>
          </h5>
        </Row>

        <Row>
          <div className="d-flex">
            <Col>
              <p>About </p>
              <p>Community Guidelines</p>
              <p>
                Privacy & Terms <i className="bi bi-caret-down-fill"></i>
              </p>
              <p>Sales Solutions</p>
              <p>Safety Center</p>
            </Col>
            <Col>
              <p>Accessibility </p>
              <p> Careers </p>
              <p>Ad Choices</p>
              <p>Mobile</p>
            </Col>
            <Col>
              <p>Talent Solutions</p>
              <p> Marketing Solutons </p>
              <p>Advertising</p>
              <p>Small Business</p>
            </Col>
          </div>
          <Col>
            <Row>
              <div>
                <i className="bi bi-question-circle-fill"></i>
              </div>
              <div>
                <b>Questions?</b>
                <p>Visit our Help Center</p>
              </div>
            </Row>

            <Row>
              <div>
                <i className="bi bi-gear-fill d-block"></i>
              </div>
              <div>
                <b className="mngFooter">Manage your account and privacy</b>
                <p>Go to youir Settings</p>
              </div>
            </Row>
          </Col>

          <Col>
            <div>
              <p className="mb-0">Select Language</p>
              <Dropdown>
                <Dropdown.Toggle className="pr-5" id="footerDropdown" variant="transparent">
                  English (English)
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">German</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>

        <Row>
          <small>LinkedIn Corporation © 2022</small>
        </Row>
      </Container>
    </footer>
  )
}
export default MyFooter
