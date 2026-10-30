import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BannerVideo = ({ title, overview, movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div>
      <div className="video_wrapper">
        <iframe
          className="w-full h-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="content_wrapper absolute bottom-20 left-0 w-full">
        <div className="container">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-md font-regular">{overview}</p>
          <div className="btn_wrapper">
            <button>play</button>
            <button>more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
