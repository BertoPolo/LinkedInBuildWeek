import { Container, Row, Col } from "react-bootstrap"
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
        </Row>
      </Container>
    </footer>
  )
}
export default MyFooter
