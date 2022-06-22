import React from "react";
import { Link } from "react-router-dom";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="expert" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/" className="btn btn-outline-primary">
            HIRE ME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expert;
