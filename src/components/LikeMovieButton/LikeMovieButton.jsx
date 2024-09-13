/* eslint-disable no-unused-vars */
import React from "react";
import { useMovies } from "../../contexts/movies.context";
import { FaHeart } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkIsLikedMovie, likeMovie, unLikeMovie } from "../../api/api";

// useQuery는 렌더링시 자동실행
// useMutation는 수정이나 생성 등의 환경에서 실행

function LikeMovieButton({ movieId }) {
  const queryClient = useQueryClient();
  const queryKey = ["isLikedMovie", { movieId }];

  const { data: isLikedMovie } = useQuery({
    queryKey: queryKey,
    queryFn: () => checkIsLikedMovie(movieId),
    refetchOnWindowFocus: false, // 다른사이트로 나갔다오면 사이트 갱신
  });

  // 좋아요 추가
  const { mutateAsync: likeMovieMutationFn } = useMutation({
    mutationFn: (movieId) => likeMovie(movieId),
  });
  // 좋아요 취소
  const { mutateAsync: unLikeMovieMutationFn } = useMutation({
    mutationFn: (movieId) => unLikeMovie(movieId),
  });

  const { checkIsLiked } = useMovies();

  const isLike = checkIsLiked(movieId);

  //좋아요 버튼 등록,취소
  const handleClickLikeButton = async () => {
    if (isLikedMovie) {
      await unLikeMovieMutationFn(movieId);
    } else {
      await likeMovieMutationFn(movieId);
    }

    queryClient.invalidateQueries({ queryKey, exact: true });
  };

  return (
    <button
      className={`bg-slate-50/40 w-[70px] h-[70px] rounded-full text-center ${
        isLikedMovie ? "text-red-500" : "text-white"
      }`}
      onClick={handleClickLikeButton}
    >
      <FaHeart className="inline-block text-3xl" />
    </button>
  );
}

export default LikeMovieButton;
