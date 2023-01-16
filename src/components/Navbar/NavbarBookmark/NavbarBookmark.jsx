import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const NavbarBookmark = () => {
	return (
		<>
			<div className="navbar-bookmark">
				<NavLink to="/watchlist">
					<FontAwesomeIcon
						icon={faBookmark}
						style={{ width: "20px", height: "20px" }}
					/>
				</NavLink>
			</div>
		</>
	);
};

export default NavbarBookmark;
