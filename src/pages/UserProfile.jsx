import { useEffect, useState } from "react";
import UserImage from "../components/Profile/UserImage/UserImage";
import UserInfos from "../components/Profile/UserInfos/UserInfos";
import { auth, db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../Styles/user-profile.css";

const UserProfile = ({ isAuth, username }) => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    birthday: "",
  });

  const usersCollectionRef = collection(db, "users");
  const [userId, setUserId] = useState("");

  const getUserInfo = async () => {
    const data = await getDocs(usersCollectionRef);
    const obj = data.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    const arr = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].author.id === auth.currentUser.uid) {
        arr.push(obj[i].info);
        setUserId(obj[i].id);
      }
    }

    if (arr.length > 0) {
      setInfo(arr[0]);
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
    getUserInfo();
  }, []);

  return (
    <div className="user-profile" style={{ color: "white" }}>
      <UserImage username={username} />
      {Object.keys(info).length > 0 && (
        <UserInfos info={info} setInfo={setInfo} id={userId} />
      )}
    </div>
  );
};

export default UserProfile;
