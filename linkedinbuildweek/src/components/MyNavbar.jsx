import { Navbar, Form, FormControl, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" id="MyNavbar">
      <Navbar.Brand href="#home">
        <i className="bi bi-linkedin"></i>
      </Navbar.Brand>
      <Form inline>
        <i className="bi bi-search"></i>
        <FormControl id="searchbar" type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <div className="mr-4">
        <i className="bi bi-house-door-fill "></i>
        <span>Home</span>
      </div>
      <div className="mr-4">
        <i className="bi bi-people-fill "></i>
        <span>My Network</span>
      </div>
      <div className="mr-4">
        <i className="bi bi-briefcase-fill "></i>
        <span>Jobs</span>
      </div>
      <div className="mr-4">
        <i className="bi bi-chat-dots-fill "></i>
        <span>Messaging</span>
      </div>
      <div className="mr-4">
        <i className="bi bi-bell-fill "></i>
        <span>Notifications</span>
      </div>

      <div className="divider">
        <Image
          id="profilePhoto"
          roundedCircle
          src="https://4.bp.blogspot.com/-JhuMSe_N8kM/TlECIiHEq6I/AAAAAAAAUao/LwzE1ux2oSg/s320/patodonaldparaimprimir4.gif"
        />
        <span>
          Me <i className="bi bi-caret-down-fill"></i>
        </span>
      </div>

      <i className="bi bi-grid-3x3-gap-fill">
        Work <i className="bi bi-caret-down-fill"></i>
      </i>

      <p id="navbartrypremium">
        Try Premium for <br />
        free
      </p>
    </Navbar>
  )
}
export default MyNavbar
