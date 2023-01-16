import { useState, useRef, useEffect } from "react";
import { getDownloadURL, ref, listAll, uploadBytes } from "firebase/storage";
import { storage } from "../../../config/firebaseConfig";
import profile from "./profile.png";
import "./user-image.css";

const UserImage = ({ username }) => {
  const [file, setFile] = useState("");
  const [pathImage, setPathImage] = useState("");

  const storageRef = ref(storage, `files/`);

  const handleUpload = () => {
    if (!file) {
      alert("Please choose a file first!");
    } else {
      const imageRef = ref(storage, `files/${username}`);
      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setPathImage(url);
        });
      });
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    listAll(storageRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if (url.includes(username)) {
            setPathImage(url);
          }
        });
      });
    });
  }, []);

  return (
    <div className="user-image">
      <h2>Profile Picture</h2>
      <div className="thumbnail">
        <img
          src={pathImage ? pathImage : profile}
          alt={`${username}'s avatar`}
        />
      </div>

      <div className="warning">
        <span>JPG or PNG no larger than 5 MB</span>
      </div>

      <div className="upload-image">
        <input
          type="file"
          id="files"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        <label htmlFor="files">Select File</label>

        <button className="btn" onClick={handleUpload}>
          Upload new image
        </button>
      </div>
    </div>
  );
};

export default UserImage;
