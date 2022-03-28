import { Navbar, Form, FormControl, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <i class="bi bi-linkedin"></i>
      </Navbar.Brand>
      <Form inline>
        <i class="bi bi-search"></i>
        <FormControl id="searchbar" type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      {/* <div> */}
      <i class="bi bi-house-door-fill">Home</i>
      <i class="bi bi-people-fill">My Network</i>
      <i class="bi bi-briefcase-fill">Jobs</i>
      <i class="bi bi-chat-dots-fill">Messaging</i>
      <i class="bi bi-bell-fill">Notifications</i>

      <div className="divider">
        <Image
          id="profilePhoto"
          roundedCircle
          src="https://4.bp.blogspot.com/-JhuMSe_N8kM/TlECIiHEq6I/AAAAAAAAUao/LwzE1ux2oSg/s320/patodonaldparaimprimir4.gif"
        />
        <span>
          Me <i class="bi bi-caret-down-fill"></i>
        </span>
      </div>

      <i class="bi bi-grid-3x3-gap-fill">
        Work <i class="bi bi-caret-down-fill"></i>
      </i>

      <p id="navbartrypremium">
        Try Premium for <br />
        free
      </p>
      {/* </div> */}
    </Navbar>
  )
}
export default MyNavbar
