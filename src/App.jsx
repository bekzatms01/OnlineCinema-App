import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnlineCinema from "./pages/OnlineCinema";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Cartoons from "./pages/Cartoons";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleMovie from "./pages/SingleMovie";
import ErrorPage from "./pages/ErrorPage";
import SingleSerial from "./pages/SingleSerial";
import UserProfile from "./pages/UserProfile";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import Home from "./pages/Home";
import SingleCartoon from "./pages/SingleCartoon";
import SearchPage from "./pages/SearchPage";
import Watchlist from "./pages/Watchlist";

function App() {
	const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
	const [username, setUsername] = useState(localStorage.getItem("username"));

	const handleLogout = () => {
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
		});
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<OnlineCinema
								isAuth={isAuth}
								handleLogout={handleLogout}
								username={username}
							/>
						}
					>
						<Route index element={<Home />} />
						<Route path="movies" element={<Movies />} />
						<Route
							path="movies/:movieId"
							element={<SingleMovie isAuth={isAuth} />}
						/>
						<Route path="series" element={<Series />} />
						<Route
							path="series/:serialId"
							element={<SingleSerial isAuth={isAuth} />}
						/>
						<Route path="cartoons" element={<Cartoons />} />
						<Route
							path="cartoons/:cartoonId"
							element={<SingleCartoon isAuth={isAuth} />}
						/>

						<Route path="search" element={<SearchPage />} />
						<Route path="watchlist" element={<Watchlist isAuth={isAuth} />} />

						<Route
							path="login"
							element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
						/>
						<Route path="register" element={<Register isAuth={isAuth} />} />
						<Route
							path="profile"
							element={<UserProfile isAuth={isAuth} username={username} />}
						/>
						<Route path="*" element={<ErrorPage />} />
						<Route path="error" element={<ErrorPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
