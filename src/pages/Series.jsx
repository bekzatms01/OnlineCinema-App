import React, { useEffect, useState } from "react";
import TryLater from "../components/TryLater/TryLater";
import Pagination from "../components/Pagination/Pagination";
import MovieItem from "../components/Movie/MovieItem";
import { useSearchParams } from "react-router-dom";
import usePaginate from "../hooks/usePaginate";

const Series = () => {
  // Hooks
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(5);
  const lastURL = `&field=typeNumber&search=2&sortField[]=rating.kp&sortType[]=-1&limit=20&token=${process.env.REACT_APP_TOKEN}`;
  const {docs, page, nextPage, prevPage} = usePaginate(process.env.REACT_APP_URL_FOR_MOVIES, searchParams, lastURL);

  let arr = [];
  if (numberOfPages) {
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }
  }

  useEffect(() => {
    if (!docs) {
      setError(true);
    }
  }, [docs])

  return (
    <>
      {error ? (
        <TryLater />
      ) : (
        <div className={`series container ${!docs && "margin"}`}>
          {docs?.map((serial) => {
              return <MovieItem item={serial} key={serial.id} type="series" />;
          })}
        </div>
      )}

      {docs && (
        <Pagination
          prevBtn={nextPage}
          nextBtn={prevPage}
          currentPage={page}
          arr={arr}
        />
      )}
    </>
  );
};

export default Series;
