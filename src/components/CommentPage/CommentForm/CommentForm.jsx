import { useState } from "react";
import { auth, db } from "../../../config/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import "./comment-form.css";

const CommentForm = ({ isAuth, type, id, getComments }) => {
	const [comment, setComment] = useState("");
	const commentsCollectionRef = collection(db, "comments");

	const handleComment = async (e) => {
		e.preventDefault();
		// const currentDate = new Date();

		// const currentDayOfMonth = currentDate.getDate();
		// const currentMonth = currentDate.getMonth();
		// const currentYear = currentDate.getFullYear();

		// function pad(n) {
		// 	return n < 10 ? "0" + n : n;
		// }
		// const dateString =
		// 	pad(currentDayOfMonth) + "-" + pad(currentMonth + 1) + "-" + currentYear;

		let comment_date = new Date().toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});

		if (Number(comment_date[0]) < 10) {
			comment_date = "0" + comment_date;
		}

		if (!comment) {
			alert("Please write");
		} else {
			if (isAuth) {
				await addDoc(commentsCollectionRef, {
					comment,
					comment_date,
					author: {
						name: auth.currentUser.email,
						id: auth.currentUser.uid,
					},
					pageInfo: {
						type,
						id,
					},
				});
				getComments();
			} else {
				alert("First you need to log in");
			}
		}

		setComment("");
	};

	return (
		<div className="comment-form">
			<form onSubmit={handleComment}>
				<textarea
					name="text"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					placeholder="Comment..."
				></textarea>
				<div className="comment-btn">
					<button type="submit">Comment</button>
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
