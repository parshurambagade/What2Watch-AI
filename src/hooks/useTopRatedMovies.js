import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { BACKEND_ENDPOINT } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetch(`${BACKEND_ENDPOINT}/top-rated-movies`);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    !topRatedMovies?.length && fetchMovies();
  }, [topRatedMovies, fetchMovies]);
};

export default useTopRatedMovies;
