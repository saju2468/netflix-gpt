import { POSTER_IMAGE } from "../utilities/constants";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;

  return (
    <div className="w-36 md:w-48 shrink-0 rounded-md overflow-hidden ">
      <img
        className="rounded-md object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
        src={POSTER_IMAGE + posterpath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
