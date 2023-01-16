import { useState, useEffect } from "react";

function usePaginate(url, query, lastURL) {
  const [data, setData] = useState({
    docs: [],
    page: 0,
    nextPage: 0,
    prevPage: 0,
    total: 0,
  });

  useEffect(() => {
    fetch(`${url}${query.toString()}${lastURL}`)
      .then((res) => res.json())
      .then(({ docs, total, page }) => {
        setData({
          docs,
          total,
          page,
          nextPage: page + 1,
          prevPage: page - 1,
        });
      });
  }, [query.toString()]);

  return data;
}

export default usePaginate;
