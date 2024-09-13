/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./MovieCard.module.scss";
import MoviesList from "../MoviesList/MoviesList";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <Link className="decoration-slice text-white" to={`/movies/${movie.id}`}>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt=""
        className="w-[100%] h-[150px] bg-white"
      />

      <h4 className="m-0 text-white">{movie.title}</h4>
    </Link>
  );
}

export default MovieCard;
