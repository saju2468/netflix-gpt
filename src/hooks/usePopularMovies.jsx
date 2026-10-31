import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilities/moviesSlice";
import { API_OPTIONS } from "../utilities/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS,
      );

      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };

    getNowPopularMovies();
  }, []);
};

export default usePopularMovies;
