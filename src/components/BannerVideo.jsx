import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BannerVideo = ({ title, overview, movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        {trailerVideo?.key && (
          <iframe
            className="w-screen aspect-video min-h-full min-w-full scale-135 md:scale-150 pointer-events-none"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&playsinline=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        )}
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Content overlay */}
      <div className="content_wrapper absolute bottom-24 left-0 w-full z-20 text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-xl">{title}</h1>
          <p className="text-sm md:text-base text-zinc-300 mt-3 max-w-md line-clamp-3">
            {overview}
          </p>
          <div className="btn_wrapper flex items-center gap-3 mt-6">
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-white/80 transition flex items-center gap-2">
              ▶ Play
            </button>
            <button className="bg-zinc-600/80 text-white font-semibold px-6 py-2 rounded-md hover:bg-zinc-600 transition flex items-center gap-2">
              ⓘ More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
