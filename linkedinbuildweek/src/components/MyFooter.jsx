import { Container, Row, Col, Dropdown } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
const MyFooter = () => {
  return (
    <footer>
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
                Privacy & Terms <i class="bi bi-caret-down-fill"></i>
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

          <div className="d-">
            <i className="bi bi-question-circle-fill"></i>
            <b>Questions?</b>
            <p>Visit our Help Center</p>
          </div>

          <div>
            <i className="bi bi-gear-fill"></i>
            <b>Manage</b>
            <p>Go to youir Settings</p>
          </div>

          <div>
            <p>Select Language</p>
            <Dropdown>
              <Dropdown.Toggle id="footerDropdown" variant="transparent">
                English (English)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                <Dropdown.Item href="#/action-3">German</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Row>

        <Row>
          <small>LinkedIn Corporation © 2022</small>
        </Row>
      </Container>
    </footer>
  )
}
export default MyFooter
