import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import TryLater from "../components/TryLater/TryLater";
import MovieItem from "../components/Movie/MovieItem";
import "../Styles/search-page.css";

const types = [
	{ id: 1, link: "movies", title: "Movies" },
	{ id: 2, link: "series", title: "TV-Series" },
	{ id: 3, link: "cartoons", title: "Cartoons" },
];

const SearchPage = () => {
	const [data, setData] = useState(null);
	const [dataEmpty, setDataEmpty] = useState(false);
	const [type, setType] = useState(1);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(true);
	const API = `${process.env.REACT_APP_URL_FOR_MOVIES}field=typeNumber&search=${type}&search=${query}&sortField[]=rating.kp&sortType[]=-1&field=name&selectFields=poster+rating+id+type+name+enName+year+alternativeName&limit=20&token=${process.env.REACT_APP_TOKEN}`;

	const getData = () => {
		if (query) {
			console.log(query);
			setLoading(true);
			fetch(API)
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					setError(false);
					if (result.docs.length === 0) {
						setDataEmpty(true);
						setLoading(false);
						setActive(false);
					} else {
						setTimeout(() => {
							setData(result.docs);
							setLoading(false);
							setDataEmpty(false);
							setActive(false);
						}, 1000);
					}
				});
		}
	};

	const handleSearch = (e) => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		getData();
	}, [type]);

	return (
		<div className="search-container">
			<div className="search-form">
				<SearchForm
					query={query}
					handleSearch={handleSearch}
					getData={getData}
				/>
			</div>

			<div
				className={`search-type ${active && "margin-tp"} ${
					loading && "margin-bt"
				}`}
			>
				{types.map((item) => {
					return (
						<span
							onClick={() => setType(item.id)}
							key={item.id}
							className={type === item.id ? "active" : ""}
						>
							Search {item.title}
						</span>
					);
				})}
			</div>

			{error ? (
				<TryLater />
			) : loading ? (
				<span className="loader"></span>
			) : dataEmpty ? (
				<div className={`${!active && "dont-have"}`}>
					We don't have that {types[type - 1].link}
				</div>
			) : (
				<div className="search-result container">
					{data?.map((item) => {
						if (item.poster) {
							return (
								<MovieItem
									item={item}
									key={item.id}
									type={types[type - 1].link}
								/>
							);
						}
					})}
				</div>
			)}
		</div>
	);
};

export default SearchPage;
