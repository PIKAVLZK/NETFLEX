/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { useAuth } from "./auth.context";

const initialValue = {
  toggleLikeMovie: [],
  checkIsLiked: () => {},
  likedMovieIds: () => {},
};

const MoviesContext = createContext(initialValue);

export const useMovies = () => useContext(MoviesContext);

export function MoviesProvider({ children }) {
  const [likedMovieIds, setLikedMovieIds] = useState([]); // 좋아요 체크
  const { currentUser } = useAuth();

  // 좋아요 버튼
  const toggleLikeMovie = (movieId) => {
    if (!currentUser) return alert("로그인 후 이용해주세요.");

    const isLiked = likedMovieIds.includes(movieId); // 포함되어 있는지 판별

    let newLikedMovies = [];
    if (isLiked) {
      newLikedMovies = likedMovieIds.filter(
        (likedMovieIds) => likedMovieIds !== movieId
      );
    } else {
      newLikedMovies = [...likedMovieIds, movieId]; // 새로운 배열을 만들어 집어넣기
    }

    setLikedMovieIds(newLikedMovies);
  };

  const checkIsLiked = (movieId) => {
    const isLiked = likedMovieIds.includes(movieId);

    return isLiked;
  };

  useEffect(() => {
    if (currentUser === null) setLikedMovieIds([]);
  }, [currentUser]);

  const value = {
    toggleLikeMovie,
    checkIsLiked,
    likedMovieIds,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}
