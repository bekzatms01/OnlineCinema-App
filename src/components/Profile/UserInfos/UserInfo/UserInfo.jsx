import React from "react";
import "./user-info.css";
const UserInfo = ({
  id,
  type,
  name,
  placeholder,
  labelText,
  info,
  setInfo
}) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <br />
      <input
        type={type}
        name={name}
        id={id}
        value={info[name]}
        placeholder={placeholder}
        onChange={(e) => setInfo({...info, [name]: e.target.value})}
      />
    </div>
  );
};

export default UserInfo;
