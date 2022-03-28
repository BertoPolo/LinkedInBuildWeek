import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import SideBar from "./components/SideBar"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"
import MyProfile from "./components/MyProfile/MyProfile"

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
      <MyFooter />
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
