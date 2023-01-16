import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Watchlist = ({ isAuth }) => {
	const bookmarksCollectionRef = collection(db, "bookmarks");
	const [list, setList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		}
		const getBookmarks = async () => {
			const data = await getDocs(bookmarksCollectionRef);
			const obj = data.docs.map((doc) => {
				return { ...doc.data(), id: doc.id };
			});

			const arr = [];
			for (let i = 0; i < obj.length; i++) {
				if (obj[i].author.name === auth.currentUser.email) {
					arr.push(obj[i].bookmarkInfo);
				}
			}
			setList(arr);
		};
		getBookmarks();
	}, [isAuth, navigate]);

	return (
		<div className={`watchlist container ${list.length === 0 && "margin"}`}>
			{list?.map((item) => {
				return (
					<div className="col" key={item.id}>
						<Link to={`/${item.type}/${item.id}`}>
							<div className="thumbnail">
								<img src={item.img} alt="photo1" />
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Watchlist;
