import React from "react";
import Genres from "../Movie/Genres/Genres";
import Rating from "../Movie/Rating/Rating";
import Title from "../Movie/Title/Title";
import CommentPage from "../CommentPage/CommentPage";
import Image from "../Movie/Image/Image";
import "../../Styles/single-container.css";
import Bookmark from "./Bookmark/Bookmark";

const SinglePage = ({ item, itemId, isAuth, type, link }) => {
	return (
		<>
			{item && (
				<>
					<div className="single-container">
						<div className="thumbnail">
							<Image image={item.poster.previewUrl} altName={item.name} />
						</div>
						<div className="info">
							<div className="title">
								<Title title={item.name} />
							</div>

							<div className="rating">
								<Rating rating={item.rating.kp} />
							</div>
							<div className="genres">
								<Genres genres={item.genres} />
							</div>
							<div className="description">
								<p>
									{item.description ? item.description : item.shortDescription}
								</p>
							</div>
							<div className="additional-info">
								<div className="watch">
									<a
										href={`https://www.kinopoisk.ru/${link}/${itemId}/`}
										target="blank"
									>
										Watch now
									</a>
								</div>
								<Bookmark
									id={itemId}
									type={type}
									isAuth={isAuth}
									img={item.poster.url}
								/>
							</div>
						</div>
					</div>

					<CommentPage id={itemId} type={type} isAuth={isAuth} />
				</>
			)}
			;
		</>
	);
};

export default SinglePage;
