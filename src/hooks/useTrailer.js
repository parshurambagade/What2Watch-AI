import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../redux/moviesSlice";
import { BACKEND_ENDPOINT } from "../utils/constants";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies.trailer);

  const fetchMovieVideos = useCallback(async () => {
    try {
      const data = await fetch(`${BACKEND_ENDPOINT}/movie-videos?movieId=${movieId}`);

      const json = await data.json();

      //checks for the type = Trailer
      const filteredData = await json?.results?.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = filteredData?.length ? filteredData[0] : json?.results[0];

      dispatch(addTrailer(trailer));
    } catch (e) {
      console.error(e);
    }
  }, [movieId, dispatch]);

  useEffect(() => {
    movieId && fetchMovieVideos();
  }, [movieId, fetchMovieVideos]);

  return trailer;
};

export default useTrailer;
