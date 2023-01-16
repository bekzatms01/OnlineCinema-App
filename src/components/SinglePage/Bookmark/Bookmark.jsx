import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebaseConfig";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
} from "firebase/firestore";

const Bookmark = ({ isAuth, type, id, img }) => {
	const [saved, setSaved] = useState(false);
	const bookmarksCollectionRef = collection(db, "bookmarks");
	const [bookmarkId, setBookmarkId] = useState();

	const getBookmarks = async () => {
		const data = await getDocs(bookmarksCollectionRef);
		const obj = data.docs.map((doc) => {
			return { ...doc.data(), id: doc.id };
		});
		for (let i = 0; i < obj.length; i++) {
			if (
				obj[i].author.name === auth.currentUser.email &&
				obj[i].bookmarkInfo.id === id &&
				obj[i].bookmarkInfo.type === type
			) {
				setSaved(true);
				setBookmarkId(obj[i].id);
			}
		}
	};

	const handleBookmark = async () => {
		if (isAuth) {
			if (!saved) {
				await addDoc(bookmarksCollectionRef, {
					author: {
						name: auth.currentUser.email,
						id: auth.currentUser.uid,
					},
					bookmarkInfo: {
						type,
						id,
						img,
					},
				});
				setSaved(true);
				getBookmarks();
			} else {
				const bookmarkDoc = doc(db, "bookmarks", bookmarkId);
				await deleteDoc(bookmarkDoc);
				getBookmarks();
				setSaved(false);
			}
		} else {
			alert("First you need to log in");
		}
	};

	useEffect(() => {
		console.log("1");
		getBookmarks();
	}, []);

	return (
		<div className="bookmark">
			<FontAwesomeIcon
				icon={faBookmark}
				onClick={handleBookmark}
				className={`bookmark-btn ${saved && "bookmark-saved"}`}
			/>
		</div>
	);
};

export default Bookmark;
