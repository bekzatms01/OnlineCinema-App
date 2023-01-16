import { NavLink } from "react-router-dom";
import NavbarProfile from "./NavbarProfile/NavbarProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../../pages/OnlineCinema";
import "./navbar.css";
import NavbarBookmark from "./NavbarBookmark/NavbarBookmark";

const Navbar = ({ handleLogout, username }) => {
	const isAuth = useContext(AuthContext);
	const [open, setOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-left">
				{/* MENU-BARS for mobile devices */}
				<div className="menu-bars">
					<FontAwesomeIcon
						icon={faBars}
						style={{ width: "20px", height: "20px" }}
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>

				{/* LOGO */}
				<div className="logo">
					<NavLink to="/" className="logo-link">
						OnlineCinema
					</NavLink>
				</div>
			</div>

			<div className={`navbar-right`}>
				{/* MENU */}
				<div className={`menu ${open && "active"}`}>
					<NavLink to="/movies" onClick={() => setOpen(false)}>
						Movies
					</NavLink>
					<NavLink to="/series" onClick={() => setOpen(false)}>
						TV Shows
					</NavLink>
					<NavLink to="/cartoons" onClick={() => setOpen(false)}>
						Cartoons
					</NavLink>
				</div>

				{/* navbar search  */}
				<div className="navbar-search">
					<NavLink to="/search">
						<FontAwesomeIcon
							icon={faSearch}
							style={{ width: "20px", height: "20px" }}
						/>
					</NavLink>
				</div>

				{/* watchlist */}
				{isAuth && <NavbarBookmark />}

				{/* Navbar profile */}
				<NavbarProfile handleLogout={handleLogout} username={username} />
			</div>
		</nav>
	);
};

export default Navbar;
