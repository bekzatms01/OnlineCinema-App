import { useState, useEffect, useRef } from "react";
import MovieItem from "../components/Movie/MovieItem";
import TryLater from "../components/TryLater/TryLater";
import Pagination from "../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import usePaginate from "../hooks/usePaginate";
import "../Styles/container.css";

const Movies = () => {
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();
  const lastURL = `&field=typeNumber&search=1&sortField[]=rating.kp&sortType[]=-1&limit=20&token=${process.env.REACT_APP_TOKEN}`;
  const { docs, page, nextPage, prevPage } = usePaginate(
    process.env.REACT_APP_URL_FOR_MOVIES,
    searchParams,
    lastURL
  );
  const numberOfPages = useRef(5);

  let arr = [];
  if (numberOfPages.current) {
    for (let i = 1; i <= numberOfPages.current; i++) {
      arr.push(i);
    }
  }

  useEffect(() => {
    if (!docs) setError(true);
  }, [docs]);

  return (
    <>
      {error && <TryLater />}
      {!error && (
        <div className={`movies container ${!docs && "margin"}`}>
          {docs?.map((movie) => (
            <MovieItem item={movie} key={movie.id} type="movies" />
          ))}
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

export default Movies;
