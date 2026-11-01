import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utilities/moviesSlice";
import { API_OPTIONS } from "../utilities/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS,
      );

      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };

    if (!upcomingMovies) getUpcomingMovies();
  }, [upcomingMovies, dispatch]);
};

export default useUpcomingMovies;
