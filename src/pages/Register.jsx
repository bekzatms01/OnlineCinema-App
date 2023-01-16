import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ isAuth }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Data created");
        navigate("/login");
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  });

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <Form
          email={email}
          password={password}
          handleEmail={handleEmail}
          handlePassword={handlePassword}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
