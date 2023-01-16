import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTiktok,
	faTwitter,
	faFacebook,
	faInstagram,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer-top">
				<div className="about-us">
					<h2>About Us</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						varius faucibus velit ac luctus. Ut volutpat augue erat, nec
						molestie mi sodales a. Cras libero lacus, iaculis non odio sed,
						ullamcorper venenatis nulla.
					</p>
				</div>
				<div className="contacts">
					<a href="https://www.facebook.com/" target="blank">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href="https://twitter.com/" target="blank">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href="https://www.instagram.com/" target="blank">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href="https://www.tiktok.com/en/" target="blank">
						<FontAwesomeIcon icon={faTiktok} />
					</a>
					<a href="https://web.whatsapp.com/" target="blank">
						<FontAwesomeIcon icon={faWhatsapp} />
					</a>
				</div>
			</div>

			<hr />

			<div className="footer-bottom">
				<div className="footer-bottom__left">Copyright &#169; 2022</div>
				<div className="footer-bottom__right">
					<NavLink to="/movies">Movies</NavLink>
					<NavLink to="/series">TV Shows</NavLink>
					<NavLink to="/cartoons">Cartoons</NavLink>
				</div>
			</div>
		</>
	);
};

export default Footer;
