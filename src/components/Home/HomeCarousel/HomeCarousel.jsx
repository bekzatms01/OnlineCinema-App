import React from "react";
import HomeImage from "../HomeImage/HomeImage";
import "./home-carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeCarousel = ({ data, type }) => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1400 },
			items: 6,
		},
		desktop: {
			breakpoint: { max: 1400, min: 1024 },
			items: 5,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 3,
		},
	};

	return (
		<>
			{data && (
				<div className="thumbnail">
					<Carousel responsive={responsive}>
						{data.map((info) => {
							return (
								<HomeImage
									image={info.poster}
									altName={info.name}
									key={info.id}
									rating={info.rating.kp}
									id={info.id}
									type={type}
								/>
							);
						})}
					</Carousel>
				</div>
			)}
		</>
	);
};

export default HomeCarousel;
