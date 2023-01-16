import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm/CommentForm";
import Comment from "./Comment/Comment";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import "./comment-page.css";

const CommentPage = ({ isAuth, type, id }) => {
  const [commentList, setCommentList] = useState([]);

  const commentsCollectionRef = collection(db, "comments");

  const getComments = async () => {
    const data = await getDocs(commentsCollectionRef);
    const obj = data.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    let arr = [];
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].pageInfo.id === id) {
        arr.push(obj[i]);
      }
    }
    setCommentList(arr);
  };

  const deleteComment = async (id) => {
    const commentDoc = doc(db, "comments", id);
    await deleteDoc(commentDoc);
    getComments();
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section className="comment-container">
      <h2>Comments:</h2>
      <CommentForm
        id={id}
        type={type}
        isAuth={isAuth}
        getComments={getComments}
      />
      <Comment commentList={commentList} deleteComment={deleteComment} />
    </section>
  );
};

export default CommentPage;
