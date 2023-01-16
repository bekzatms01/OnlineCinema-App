import React from "react";
import { auth } from "../../../config/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./comment.css";

const Comment = ({ commentList, deleteComment }) => {
	return (
		<>
			{commentList?.map((comment, idx) => {
				return (
					<div className="comment" key={idx}>
						<div className="comment-info">
							<div className="comment-user-img">
								<img
									src="http://cdn.onlinewebfonts.com/svg/img_24787.png"
									alt="username 1"
									style={{ width: "48px" }}
								/>
							</div>
							<div className="comment-detail">
								<div className="comment__author">{comment.author.name}</div>
								<div className="comment__date">{comment.comment_date}</div>
								<div className="comment__text">{comment.comment}</div>
							</div>
						</div>
						{comment.author.id === auth.currentUser.uid && (
							<div className="comment-delete">
								<FontAwesomeIcon
									icon={faTrash}
									onClick={() => deleteComment(comment.id)}
								/>
							</div>
						)}
					</div>
				);
			})}
		</>
	);
};

export default Comment;
