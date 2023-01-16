import React from "react";
import "./form.css";
const Form = ({ email, password, handleEmail, handlePassword }) => {
	return (
		<>
			<div className="inputDiv">
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleEmail}
					placeholder="Email"
				/>
			</div>

			<div className="inputDiv">
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={handlePassword}
					placeholder="Password"
				/>
			</div>
		</>
	);
};

export default Form;
