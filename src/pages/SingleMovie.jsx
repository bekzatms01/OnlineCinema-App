import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SinglePage from "../components/SinglePage/SinglePage";

const SingleMovie = ({ isAuth }) => {
  const navigate = useNavigate();
  const { movieId } = useParams();

  const API = `${process.env.REACT_APP_URL_FOR_MOVIES}field=id&search=${movieId}&token=${process.env.REACT_APP_TOKEN}`;

  const [movie, setMovieState] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovieState(data);
      })
      .catch((err) => {
        navigate("/error");
      });
  }, [API, navigate]);

  return (
    <>
      <SinglePage
        item={movie}
        itemId={movieId}
        isAuth={isAuth}
        type="movies"
        link="film"
      />
    </>
  );
};

export default SingleMovie;
