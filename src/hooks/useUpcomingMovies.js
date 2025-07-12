import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { BACKEND_ENDPOINT } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetch(`${BACKEND_ENDPOINT}/upcoming-movies`);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    !upcomingMovies?.length && fetchMovies();
  }, [fetchMovies, upcomingMovies]);
};

export default useUpcomingMovies;
