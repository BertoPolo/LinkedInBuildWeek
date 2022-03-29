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
      <div className="mr-4 ">
        <i className="bi bi-house-door-fill d-block"></i>
        <span>Home</span>
        {/* <Link to="/">Home</Link> */}
      </div>
      <div className="mr-4">
        <i className="bi bi-people-fill d-block "></i>
        <span>My Network</span>
        {/* <Link to="/">My Network</Link> */}
      </div>
      <div className="mr-4">
        <i className="bi bi-briefcase-fill d-block "></i>
        <span>Jobs</span>
        {/* <Link to="/">Jobs</Link> */}
      </div>
      <div className="mr-4">
        <i className="bi bi-chat-dots-fill d-block"></i>
        <span>Messaging</span>
        {/* <Link to="/">Messaging</Link> */}
      </div>
      <div className="mr-4">
        <i className="bi bi-bell-fill d-block"></i>
        <span>Notifications</span>
        {/* <Link to="/">Notifications</Link> */}
      </div>

      <div className="divider">
        <Image
          id="profilePhoto"
          roundedCircle
          src="https://4.bp.blogspot.com/-JhuMSe_N8kM/TlECIiHEq6I/AAAAAAAAUao/LwzE1ux2oSg/s320/patodonaldparaimprimir4.gif"
        />
        <span className="d-block">
          Me <i className="bi bi-caret-down-fill "></i>
        </span>
      </div>

      <div>
        <i className="bi bi-grid-3x3-gap-fill d-block"></i>
        <span> Work</span>
        <i className="bi bi-caret-down-fill"></i>
      </div>

      <p id="navbartrypremium">
        Try Premium for <br />
        free
      </p>
    </Navbar>
  )
}
export default MyNavbar
