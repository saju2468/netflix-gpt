import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { API_OPTIONS } from "../utilities/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS,
      );

      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };

    if (!nowPlayingMovies) getNowPlayingMovies();
  }, [nowPlayingMovies, dispatch]);
};

export default useNowPlayingMovies;
