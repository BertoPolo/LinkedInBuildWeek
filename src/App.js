import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"
import { Container } from "react-bootstrap"
import MyFooter from "./components/MyFooter"
import MyNavbar from "./components/MyNavbar"
import MyProfile from "./components/MyProfile/MyProfile"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container>
          <Routes>
            <Route path="/:id" element={<MyProfile />} />
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </>
  )
}

export default App
