import axios from "axios";
//유지보수성 올리기

const baseURL = "https://api.themoviedb.org"; // 변하지 않는 확실한 주소 넣기
const accessToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjdiMTJjM2M2NjhiMjNjZThhNmNhMjFiYTE5M2JjYiIsIm5iZiI6MTcyNDgzMjQ5NC41NTE1NTMsInN1YiI6IjY1YTlkNjZjNTM0NjYxMDEzOGNkMTFhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRVZwTNunIYGQ1-wPudD_JX_4KKTVWUSXtLP5Y4ARqs";

const tmdbClient = axios.create({
  baseURL,
  headers: {
    Authorization: accessToken,
  },
});

const jsonClient = axios.create({ baseURL: "http://localhost:3000" });

// 영화 카테고리
export const getMoviesOnCategory = async (category) => {
  // const 앞에 바로 export를 사용해 내보낼 수 있음
  const url = `/3/movie/${category}?language=ko-KR&page=1`;
  const response = await tmdbClient.get(url);
  const movies = response.data.results;

  return movies;
};

// 상세정보
export const getMovie = async (movieId) => {
  const url = `/3/movie/${movieId}?language=ko-KR&page=1`;
  const response = await tmdbClient.get(url);
  const movie = response.data;

  return movie;
};

// jsonClient 작업

// 좋아요
export const likeMovie = async (movieId) => {
  const url = `/likedMovies`;
  const response = await jsonClient.post(url, { id: movieId });
  const likedMovie = response.data;

  return likedMovie;
};

// 좋아요 지우기
export const unLikeMovie = async (movieId) => {
  const url = `/likedMovies/${movieId}`;
  const response = await jsonClient.delete(url, { id: movieId });
  const likedMovie = response.data;

  return likedMovie;
};

export const checkIsLikedMovie = async (movieId) => {

  try{
    const url = `likedMovies/${movieId}`;
    const response = await jsonClient.get(url);
    const likedMovie = response.data;
    const isLikedMovie = !!likedMovie;
  
    return isLikedMovie;
  }catch (e) {
    if(e.status === 404){
      return false;
    }
  }
  
};
