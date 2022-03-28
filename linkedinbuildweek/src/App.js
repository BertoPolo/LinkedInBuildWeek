import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"
import SideBar from "./Components/SideBar"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyFooter from "./Components/MyFooter"
import MyNavbar from "./Components/MyNavbar"
import MyProfile from "./Components/MyProfile/MyProfile"

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <MyNavbar />
      {/* <Routes> */}
      <MyProfile />
      {/* </Routes> */}
      {/* <Route path="" element={}> */}
      <SideBar />
      {/* </BrowserRouter> */}
      <MyFooter />
    </>
  )
}

export default App
