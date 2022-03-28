import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = () => {
  return (
    <>
      <div className="sideBarBox">
        <div>
          <h5 className="titleSideBar">People you might know</h5>
          <div className="row">
            <div className="">
              <img
                className="profilePicSideBar"
                src="/src/Data/blank-profile-picture-973460_640.png"
                alt="asdasd"
              />
            </div>
            <div className="">
              <p>Name</p>
              <p className="information">job</p>
              <p className="information">Company</p>
              <button className="sideBarButton">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
