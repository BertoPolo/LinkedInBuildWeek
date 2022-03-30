import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container } from "react-bootstrap";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import MyProfile from "./components/MyProfile/MyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./components/Feed-Page/Feed-Page";
// import SideBar from "./components/SideBar"

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Container>
          <Routes>
            <Route path="/:id" element={<MyProfile />} />
            <Route path='/feed' element={<FeedPage/>}/>
            {/* <Route path="/:id" element={<PeoplePage />} /> */}
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
