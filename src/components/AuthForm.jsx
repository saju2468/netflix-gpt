import { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignup = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="w-full max-w-[450px] mx-auto bg-black/75 backdrop-blur-md rounded-xl p-8 sm:p-12 md:p-14 border border-white/10 shadow-2xl shadow-black/90 text-white transition-all duration-300">
      {/* Form Heading */}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
        {isSignUp ? "Sign Up" : "Sign In"}
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        {/* Full Name field (only visible in Sign Up mode) */}
        {isSignUp && (
          <div className="flex flex-col gap-1.5 transition-all duration-300">
            <label
              htmlFor="fullName"
              className="text-xs font-medium text-zinc-300 tracking-wide"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3.5 bg-zinc-800/80 hover:bg-zinc-800 focus:bg-zinc-800/95 text-white text-base rounded-md border border-zinc-700/80 focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] focus:outline-none transition-all placeholder:text-zinc-500"
              />
            </div>
          </div>
        )}

        {/* Email Address Field */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-zinc-300 tracking-wide"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3.5 bg-zinc-800/80 hover:bg-zinc-800 focus:bg-zinc-800/95 text-white text-base rounded-md border border-zinc-700/80 focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] focus:outline-none transition-all placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-xs font-medium text-zinc-300 tracking-wide"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isSignUp ? "new-password" : "current-password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3.5 bg-zinc-800/80 hover:bg-zinc-800 focus:bg-zinc-800/95 text-white text-base rounded-md border border-zinc-700/80 focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] focus:outline-none transition-all placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Primary Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-3.5 px-4 bg-[#E50914] hover:bg-[#c11119] active:scale-[0.99] text-white font-bold rounded-md shadow-lg shadow-red-950/40 cursor-pointer transition-all duration-200 tracking-wide text-base focus:outline-none focus:ring-2 focus:ring-red-500/50"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        {/* Remember Me and Forgot Password (Sign In mode) */}
        {!isSignUp && (
          <div className="flex items-center justify-between text-sm text-zinc-400 mt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none group">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded bg-zinc-800 border-zinc-700 text-[#E50914] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#E50914]"
              />
              <span className="group-hover:text-zinc-200 transition-colors">
                Remember me
              </span>
            </label>
            <a
              href="#forgot-password"
              onClick={(e) => e.preventDefault()}
              className="hover:text-zinc-200 hover:underline transition-colors text-xs sm:text-sm"
            >
              Forgot password?
            </a>
          </div>
        )}
      </form>

      {/* Mode Switcher Toggle */}
      <div className="mt-8 pt-4 border-t border-zinc-800/60 flex flex-wrap items-center text-sm sm:text-base text-zinc-400">
        <span>
          {isSignUp ? "Already have an account?" : "New to NetflixGPT?"}
        </span>
        <button
          type="button"
          onClick={toggleSignup}
          className="text-white font-semibold hover:underline cursor-pointer ml-1.5 transition-colors focus:outline-none focus:underline"
        >
          {isSignUp ? "Sign in" : "Sign up now"}
        </button>
      </div>

      {/* Subtle reCAPTCHA / Security note matching Netflix style */}
      <p className="mt-4 text-xs text-zinc-500 leading-relaxed">
        This page is protected by Google reCAPTCHA to ensure you&apos;re not a
        bot.
      </p>
    </div>
  );
};

export default AuthForm;
