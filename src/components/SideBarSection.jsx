import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import "./SideBar&SideBarSec.css";
import { Link } from "react-router-dom";

const Section = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
        },
      }
    );
    const users = await response.json();
    setUsers(users);
  }

  return (
    <div className="">
      <h5 className="titleSideBar">People you might know</h5>
      {users.slice(0, 6).map((user) => (
        <div key={user._id}>
          <div className="row nameContainerSide">
            <div className="col-3">
              <Image className="profilePicSideBar" src={user.image} alt="" />
            </div>
            <Link onClick={"window.location.reload()"} to={"/" + user._id}>
              <div className="col-8">
                <p>{user.name}</p>
                <p className="information">{user.title}</p>
                <p className="information">{user.area}</p>
                <button className="sideBarButton">Connect</button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
