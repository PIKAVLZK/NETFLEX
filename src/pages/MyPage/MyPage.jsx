/* eslint-disable no-unused-vars */
import React from "react";
import Page from "../../components/page/Page";
import { useMovies } from "../../contexts/movies.context";

function MyPage() {
  const {likedMovieIds, toggleLikeMovie} = useMovies();

  return (
    <Page>
      <h1>마이 페이지</h1>

      <section>
        <h1>내가 좋아하는 영화들</h1>
        <ul>
          {likedMovieIds.map((movieId) => (
            <li key={movieId}>
              <span>영화 {movieId} </span>
              <button onClick={() => toggleLikeMovie(movieId)}>
                좋아요 취소
              </button>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}

export default MyPage;
