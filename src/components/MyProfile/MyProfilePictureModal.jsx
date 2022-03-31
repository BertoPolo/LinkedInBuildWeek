import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const MyPictureModal = ({
  show,
  handleClosePicture,
  myProfile,
  id,
  fetchData,
}) => {
  const [imgFile, setImgFile] = useState(null);

  const handleFile = (e) => {
    setImgFile(e.target.files[0]);
  };

  function handleUpdate() {
    let img = imgFile;

    let formData = new FormData();

    formData.append("profile", img);
    formData.append("name", id);

    console.log(formData);

    axios({
      url: `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`,
      method: "POST",
      headers: {
        authorization:
          "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQxNmU3ZWQzMzk4NDAwMTVjODgzYjYiLCJpYXQiOjE2NDg0NTUyOTgsImV4cCI6MTY0OTY2NDg5OH0.VLQs1aPcryvd-GdlD9l8Fl80QZPNQHjrbWcVQpEBvCA",
      },
      data: formData,
    }).then(
      (data) => {
        console.log("data is ", data);
        fetchData(id);
        handleClosePicture();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <div>
      <Modal onHide={handleClosePicture} show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Change your profile's photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select a new picture</p>
          <input
            type="file"
            name="profileImg"
            onChange={(e) => handleFile(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClosePicture} variant="secondary">
            Close
          </Button>
          <Button onClick={(e) => handleUpdate()} variant="primary">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyPictureModal;
