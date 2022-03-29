import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container } from "react-bootstrap";
import MyFooter from "./Components/MyFooter";
import MyNavbar from "./Components/MyNavbar";
import MyProfile from "./Components/MyProfile/MyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeoplePage from "./Components/PeoplePage/PeoplePage";
// import SideBar from "./components/SideBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container>
          <Routes>
            <Route path="/:id" element={<MyProfile />} />
            {/* <Route path="/:id" element={<PeoplePage />} /> */}
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
