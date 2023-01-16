import { useEffect, useState } from "react";
import "../Styles/home.css";
import { Link } from "react-router-dom";
import HomeCarousel from "../components/Home/HomeCarousel/HomeCarousel";
import background from "../images/background.jpg";

const Home = () => {
	const [movies, setMovies] = useState(null);
	const [series, setSeries] = useState(null);
	const [cartoons, setCartoons] = useState(null);

	const homeData = [
		{
			id: 1,
			type: "movies",
			title: "Films",
			value: movies,
		},
		{
			id: 2,
			type: "series",
			title: "TV-Series",
			value: series,
		},
		{
			id: 3,
			type: "cartoons",
			title: "Cartoons",
			value: cartoons,
		},
	];

	const API_CARTOONS = `${process.env.REACT_APP_URL_FOR_MOVIES}field=typeNumber&search=3&sortField[]=rating.kp&sortType[]=-1&limit=10&token=${process.env.REACT_APP_TOKEN}`;
	const API_MOVIES = `${process.env.REACT_APP_URL_FOR_MOVIES}field=typeNumber&search=1&sortField[]=rating.kp&sortType[]=-1&limit=10&token=${process.env.REACT_APP_TOKEN}`;
	const API_TV_SERIES = `${process.env.REACT_APP_URL_FOR_MOVIES}field=typeNumber&search=2&sortField[]=rating.kp&sortType[]=-1&limit=10&token=${process.env.REACT_APP_TOKEN}`;

	const getData = async (api) => {
		const response = await fetch(api);
		const result = await response.json();
		return result.docs;
	};

	useEffect(() => {
		getData(API_MOVIES).then((data) => setMovies(data));
		getData(API_TV_SERIES).then((data) => setSeries(data));
		getData(API_CARTOONS).then((data) => setCartoons(data));
	}, [API_CARTOONS, API_MOVIES, API_TV_SERIES]);

	console.log(series);

	return (
		<>
			<div className="poster-image">
				<img src={background} alt="bg" />
			</div>

			<section className="home-container">
				{homeData.map((item) => (
					<div className="home-row" key={item.id}>
						<h2>
							<Link to={`/${item.type}`}>
								{item.title} for you <span>&#62;</span>
							</Link>
						</h2>
						<HomeCarousel data={item.value} type={item.type} />
					</div>
				))}
			</section>
		</>
	);
};

export default Home;
