import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { createContext } from "react";
import Footer from "../components/Footer/Footer";

export const AuthContext = createContext();

const OnlineCinema = ({ isAuth, handleLogout, username }) => {
	return (
		<AuthContext.Provider value={isAuth}>
			<header className="header">
				<Navbar handleLogout={handleLogout} username={username} />
			</header>
			<main className="main">
				<Outlet />
			</main>
			<footer className="footer">
				<Footer />
			</footer>
		</AuthContext.Provider>
	);
};

export default OnlineCinema;
