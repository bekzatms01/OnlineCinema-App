import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { AuthContext } from "../../../pages/OnlineCinema";
import { NavLink } from "react-router-dom";

const NavbarProfile = ({ handleLogout, username }) => {
	const [open, setOpen] = useState(false);
	const isAuth = useContext(AuthContext);

	return (
		<div className="profile">
			<FontAwesomeIcon
				icon={faUser}
				style={{ width: "20px", height: "20px" }}
				onClick={() => setOpen((prev) => !prev)}
			/>

			<ul className={`dropdown-content ${open && "active"}`}>
				{isAuth ? (
					<>
						<li>
							<NavLink to="/profile" onClick={() => setOpen((prev) => !prev)}>
								{username}
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/login"
								onClick={() => {
									handleLogout();
									setOpen((prev) => !prev);
								}}
							>
								Logout
							</NavLink>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink to="/login" onClick={() => setOpen((prev) => !prev)}>
								Sign In
							</NavLink>
						</li>
						<li>
							<NavLink to="/register" onClick={() => setOpen((prev) => !prev)}>
								Sign Up
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default NavbarProfile;
