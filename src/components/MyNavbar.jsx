import { Navbar, Form, FormControl, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" id="MyNavbar">
      <div className="navFirstPart">
        <Navbar.Brand href="#home">
          <i className="bi bi-linkedin"></i>
        </Navbar.Brand>
        <Form inline>
          <i className="bi bi-search"></i>
          <FormControl id="searchbar" type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </div>
      <div className="navSecondPart">
        {/* <div className="d-inline-block"> */}
        <div className="mr-4 ">
          <i className="bi bi-house-door-fill d-block"></i>
          {
            <Link className="text-muted" to="/feed">
              Home
            </Link>
          }
        </div>
        <div className="mr-4">
          <i className="bi bi-people-fill d-block "></i>
          <span className="text-muted">My Network</span>
          {/* <Link className="text-muted" to="/">My Network</Link> */}
        </div>
        <div className="mr-4">
          <i className="bi bi-briefcase-fill d-block "></i>
          <span className="text-muted">Jobs</span>
          {/* <Link className="text-muted" to="/">Jobs</Link> */}
        </div>
        <div className="mr-4">
          <i className="bi bi-chat-dots-fill d-block"></i>
          <span className="text-muted">Messaging</span>
          {/* <Link className="text-muted" to="/">Messaging</Link> */}
        </div>
        <div className="mr-4">
          <i className="bi bi-bell-fill d-block"></i>
          <span className="text-muted">Notifications</span>
          {/* <Link className="text-muted" to="/">Notifications</Link> */}
        </div>

        <div className="divider text-muted">
          <Image
            id="profilePhoto"
            roundedCircle
            src="https://4.bp.blogspot.com/-JhuMSe_N8kM/TlECIiHEq6I/AAAAAAAAUao/LwzE1ux2oSg/s320/patodonaldparaimprimir4.gif"
          />
          <Link to="/me" className="d-block">
            Me <i className="bi bi-caret-down-fill "></i>
          </Link>
        </div>

        <div className="text-muted">
          <i className="bi bi-grid-3x3-gap-fill d-block"></i>
          <span> Work</span>
          <i className="bi bi-caret-down-fill "></i>
        </div>

        <p id="navbartrypremium">
          Try Premium for <br />
          free
        </p>
        {/* </div> */}
      </div>
    </Navbar>
  )
}
export default MyNavbar
