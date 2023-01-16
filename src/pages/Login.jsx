import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setIsAuth, isAuth }) => {
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
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setIsAuth(true);
				localStorage.setItem("isAuth", true);
				const user_name = email.split("@");
				localStorage.setItem("username", user_name[0]);
				navigate("/");
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
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<Form
					email={email}
					password={password}
					handleEmail={handleEmail}
					handlePassword={handlePassword}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
