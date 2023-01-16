import React from "react";
import Image from "./Image/Image";
import Title from "./Title/Title";
import Rating from "./Rating/Rating";
import { Link } from "react-router-dom";

function MovieItem({ item, type }) {
  return (
    <>
      {item.poster && 
        (<div className="col">
          <Link to={`/${type}/${item.id}`}>
            <div className="thumbnail">
              <Image image={item.poster.previewUrl} altName={item.name} />
            </div>
            <div className="info">
              <div className="title">
                <Title title={item.name} />
              </div>
              {item.rating && (
                <div className="rating">
                  <Rating rating={item.rating.kp} />
                </div>
              )}
            </div>
          </Link>
        </div>)
      }
    </>
    
  );
}

export default MovieItem;
