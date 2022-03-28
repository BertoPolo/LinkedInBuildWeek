import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <MyNavbar />
      {/* <Routes> */}
      {/* <Route path="" element={}> */}
      {/* </Routes> */}
      <MyFooter />
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
