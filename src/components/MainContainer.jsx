import { useSelector } from "react-redux";
import BannerVideo from "./BannerVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="banner_wrapper relative">
      <BannerVideo title={original_title} overview={overview} movieId={id} />
    </div>
  );
};

export default MainContainer;
