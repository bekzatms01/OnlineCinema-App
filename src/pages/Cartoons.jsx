import { useState, useEffect, useRef } from "react";
import TryLater from "../components/TryLater/TryLater";
import Pagination from "../components/Pagination/Pagination";
import MovieItem from "../components/Movie/MovieItem";
import usePaginate from "../hooks/usePaginate";
import { useSearchParams } from "react-router-dom";
import "../Styles/container.css";

const Cartoons = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const numberOfPages = useRef(5);
  const lastURL = `&field=typeNumber&search=3&sortField[]=rating.kp&sortType[]=-1&limit=20&token=${process.env.REACT_APP_TOKEN}`;
  const { docs, page, nextPage, prevPage } = usePaginate(
    process.env.REACT_APP_URL_FOR_MOVIES,
    searchParams,
    lastURL
  );

  useEffect(() => {
    if (!docs) {
      setError(true);
    }
  }, [docs]);

  let arr = [];
  if (numberOfPages.current) {
    for (let i = 1; i <= numberOfPages.current; i++) {
      arr.push(i);
    }
  }

  return (
    <>
      {error ? (
        <TryLater />
      ) : (
        <div className={`cartoons container ${!docs && "margin"}`}>
          {docs?.map((cartoon) => {
            return (
              <MovieItem item={cartoon} key={cartoon.id} type="cartoons" />
            );
          })}
        </div>
      )}

      {docs && (
        <Pagination
          prevBtn={prevPage}
          nextBtn={nextPage}
          currentPage={page}
          arr={arr}
        />
      )}
    </>
  );
};

export default Cartoons;
