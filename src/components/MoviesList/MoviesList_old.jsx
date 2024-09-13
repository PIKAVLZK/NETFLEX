/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getMoviesOnCategory } from "../../api/api";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MoviesList.module.scss";

function MoviesList({ title, category }) {
  const [moviesOnCategory, setMoviesOnCategory] = useState([]);

  // const getNowPlayingMovies = async () => {
  //   // const headers = {
  //   //   //accept: "application/json", 기본으로 axios에 포함
  //   //   Authorization:
  //   //     "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsIm5iZiI6MTcyNDgzMjQ5NC41NTE1NTMsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRVZwTNunIYGQ1-wPudD_JX_4KKTVWUSXtLP5Y4ARqs",
  //   // };
  //   //const options = { method, headers };
  //   //const { results: movies } = await response.json();
  //   //axios 사용
  //   //주석처린 fetch구문 사용한 것
  // };

  //리렌더링 후 한번만 실행
  //안에서 async 호출하면 ()로 감싸주기

  useEffect(() => {
    (async () => {
      const movies = await getMoviesOnCategory(category);
      setMoviesOnCategory(movies);
      console.log(movies)
    })();
  }, [category]);

  return (
    <>
      <section className="mt-24">
        <h3 className="m-0 pl-10 ml-[-40px]">{title}</h3>

        <ul className="list-none pl-10 flex gap-5 w-screen overflow-x-auto ml-[-40px]">
          {/* 아래있는거 배열만큼 반복해서 그려줘 */}
          {moviesOnCategory.map((movie) => (
            <li key={movie.id} className="min-w-[calc((100vw-80px-60px)/5)]">
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default MoviesList;
