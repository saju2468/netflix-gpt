import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addTrailerVideo } from "../utilities/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    if (!movieId) return;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();

    console.log(json.results);

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer",
    );
    const trailer = filterData?.length ? filterData[0] : json.results?.[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
