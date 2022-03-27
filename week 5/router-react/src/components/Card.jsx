import React from "react";

export default function Card(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card w-100">
        <img
          src="http://placeimg.com/80/80/tech"
          alt="Gambar thumbnail artikel"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
