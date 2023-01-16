import React from "react";
import { Link } from "react-router-dom";

const PageItem = ({ item, currentPage }) => {
	return (
		<Link
			to={`?page=${item}`}
			className="page"
			style={{ backgroundColor: currentPage === item ? "blue" : "" }}
		>
			{item}
		</Link>
	);
};

export default PageItem;
