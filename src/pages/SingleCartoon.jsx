import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SinglePage from "../components/SinglePage/SinglePage";

const SingleCartoon = ({ isAuth }) => {
  const { cartoonId } = useParams();
  const [cartoon, setCartoon] = useState(null);
  const navigate = useNavigate();

  const API = `${process.env.REACT_APP_URL_FOR_MOVIES}field=id&search=${cartoonId}&token=${process.env.REACT_APP_TOKEN}`;

  const getSerial = async () => {
    const response = await fetch(API);
    if (!response.ok) {
      navigate("/error");
    }
    const data = await response.json();
    console.log(data);
    setCartoon(data);
  };

  useEffect(() => {
    getSerial();
  }, []);

  return (
    <>
      <SinglePage
        item={cartoon}
        itemId={cartoonId}
        isAuth={isAuth}
        type="cartoons"
        link="film"
      />
    </>
  );
};

export default SingleCartoon;
