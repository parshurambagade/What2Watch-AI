import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../redux/moviesSlice";
import { BACKEND_ENDPOINT } from "../utils/constants";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  // const movieDetails = useSelector(state => state.movies.movieDetails);
  const fetchMovieDetails = useCallback(async () => {
    try {
      const data = await fetch(
        `${BACKEND_ENDPOINT}/movie-details?movieId=${movieId}`
      );
      const json = await data.json();
      dispatch(addMovieDetails(json));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    movieId && fetchMovieDetails();
  }, [fetchMovieDetails, movieId]);
};

export default useMovieDetails;
