import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { BACKEND_ENDPOINT } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  const fetchMovies = useCallback(async () => {
    try {
      const data = await fetch(BACKEND_ENDPOINT + "/now-playing-movies");
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    !nowPlayingMovies?.length && fetchMovies();
  }, [nowPlayingMovies, fetchMovies]);
};

export default useNowPlayingMovies;
