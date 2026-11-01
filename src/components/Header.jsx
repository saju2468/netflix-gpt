import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utilities/constants";
import Button from "./Button";
import { toggleGptSearchView } from "../utilities/gptSlice";
import { changeLanguage } from "../utilities/configSlice";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, logout } = useAuth();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      navigate("/");
    }
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLogoClick = () => {
    // If user is logged in and currently in GPT Search, clicking the logo returns them home
    if (user && showGptSearch) {
      dispatch(toggleGptSearchView());
    }
  };

  return (
    <header className="py-5 absolute top-0 left-1/2 -translate-x-1/2 w-full z-20">
      <div className="container flex justify-between items-center">
        <div className="logo">
          {/* Prevent navigation to Login ('/') when already logged in */}
          <Link to={user ? "/browse" : "/"} onClick={handleLogoClick}>
            <img className="max-w-36 w-full cursor-pointer" src={LOGO} alt="Netflix Logo" />
          </Link>
        </div>
        <div className="btn_wrapper flex items-center gap-3">
          {user && (
            <div className="wrapper flex gap-3 items-center">
              {showGptSearch && (
                <div className="language_switcher">
                  <select
                    onChange={handleLanguageChange}
                    className="bg-red-600 border text-white px-4 py-2 rounded-md cursor-pointer"
                    name=""
                    id=""
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option
                        className="bg-red-600 text-white"
                        key={lang.identifier}
                        value={lang.identifier}
                      >
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="gpt_searchWrapper">
                <Button
                  text={showGptSearch ? "Homepage" : "GPT Search"}
                  onClick={handleGptSearchClick}
                />
              </div>

              <div className="user_profile flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded object-cover"
                  src={user?.photoURL || USER_AVATAR}
                  alt={user?.displayName || "User profile"}
                />
                <span className="text-white text-sm font-medium">
                  {user?.displayName}
                </span>
              </div>
            </div>
          )}
          <Button
            text={user ? "Sign Out" : "Sign In"}
            onClick={handleAuthClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
