import React from "react";
import { Link } from "react-router-dom";
import PageItem from "./PageItem/PageItem";
import "./pagination.css";

const Pagination = ({ prevBtn, nextBtn, currentPage, arr }) => {
  return (
    <div className="pagination">
      {currentPage !== 1 && 
      <Link to={`?page=${currentPage - 1}`} className="page-btn">
        &#60;
      </Link>}
      {arr.map((item, idx) => (
        <PageItem
          item={item}
          key={idx}
          currentPage={currentPage}
        />
      ))}
      {currentPage !== 5 && <Link to={`?page=${currentPage + 1}`} className="page-btn">
        &#62;
      </Link>}
    </div>
  );
};

export default Pagination;
