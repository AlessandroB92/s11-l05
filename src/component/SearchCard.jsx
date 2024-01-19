// SearchCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ songInfo }) => {
  return (
    <div className="col text-center position-absolute top-0 start-0 translate-middle" id={songInfo.id}>
      <Link
        className="text-decoration-none"
        to={`/Albums/${songInfo.album.id}`}
      >
        <img
          className="img-fluid"
          src={songInfo.album.cover_medium}
          alt={songInfo.title}
        />
      </Link>
      <p>
        <Link
          className="text-decoration-none"
          to={`/Albums/${songInfo.album.id}`}
        >
          Album: "
          {songInfo.album.title.length < 16
            ? `${songInfo.album.title}`
            : `${songInfo.album.title.substring(0, 16)}...`}
          "
        </Link>
        <br />
        <Link
          className="text-decoration-none"
          to={`/Artists/${songInfo.artist.id}`}
        >
          Artista: {songInfo.artist.name}
        </Link>
      </p>
    </div>
  );
};

export default SearchCard;
