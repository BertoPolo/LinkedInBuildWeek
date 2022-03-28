import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"
import SideBar from "./Components/SideBar"
import { Container, Row } from "react-bootstrap"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyFooter from "./Components/MyFooter"
import MyNavbar from "./Components/MyNavbar"
import MyProfile from "./Components/MyProfile/MyProfile"

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <MyNavbar />
      <Container>
        {/* <Routes> */}
        <MyProfile />
        {/* </Routes> */}
        {/* <Route path="" element={}> */}
        <SideBar />
        {/* </BrowserRouter> */}
      </Container>
      <MyFooter />
    </>
  )
}

export default App
