import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import { auth, db } from "../../../config/firebaseConfig";
import {collection, addDoc, doc, deleteDoc} from 'firebase/firestore'

const inputs = [
  {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Username",
    labelText:
      "Username (how your name will appear to other users on the site)",
  },
  {
    type: "text",
    name: "firstName",
    id: "firstName",
    placeholder: "First Name",
    labelText: "First Name",
  },
  {
    type: "text",
    name: "lastName",
    id: "lastName",
    placeholder: "Last Name",
    labelText: "Last Name",
  },
  {
    type: "tel",
    name: "phoneNumber",
    id: "phoneNumber",
    placeholder: "Phone Number",
    labelText: "Phone Number",
  },
  {
    type: "date",
    name: "birthday",
    id: "birthday",
    placeholder: "Birthday",
    labelText: "Birthday",
  },
];

const UserInfos = ({info, setInfo, id}) => {

  const usersCollectionRef = collection(db, 'users');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id.length === 0){
      await addDoc(usersCollectionRef, {
        info,
        author: {
          name: auth.currentUser.email,
          id: auth.currentUser.uid
        }
      })
    } else {
        const deleteData = async (id) => {
          const userDoc = doc(db, "users", id);
          await deleteDoc(userDoc);
        };
        deleteData(id);

        await addDoc(usersCollectionRef, {
          info,
          author: {
            name: auth.currentUser.email,
            id: auth.currentUser.uid
          }
        })
    }
  }

  return (
    <div className="detail-info">
      <h2>Account Details</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(info).length > 0 && 
          <>
            {inputs.map((input, idx) => {
              return (
                <UserInfo
                  {...input}
                  key={idx}
                  info={info}
                  setInfo={setInfo}
                />
              );
            })}
          </>
        }
        <div className="save">
          <button  className="btn">
              Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfos;





