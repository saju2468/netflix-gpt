import { useLocation } from "react-router";
import AuthForm from "./AuthForm";
import { BANNER_IMAGE } from "../utilities/constants";

const Banner = () => {
  const location = useLocation();
  const isBrowse = location.pathname === "/browse";

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4">
      {/* Background Banner with Dark Gradient Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={BANNER_IMAGE}
          alt="Netflix Banner Background"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/50 to-black/80" />
      </div>

      {/* Conditionally show banner heading on browse / logged in, or AuthForm on login */}
      {isBrowse ? (
        <div className="text-center text-white z-10 max-w-3xl px-4 space-y-4">
          <h1 className="text-3xl sm:text-6xl md:text-6xl font-extrabold tracking-tight">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg sm:text-6xl mt-1 font-medium text-zinc-200">
            Starts at ₹149. Cancel anytime.
          </p>
        </div>
      ) : (
        <div className="w-full flex justify-center z-10">
          <AuthForm />
        </div>
      )}
    </section>
  );
};

export default Banner;
