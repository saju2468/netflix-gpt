import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utilities/firebase";
import { LOGO, USER_AVATAR } from "../utilities/constants";
import { addUser, removeUser } from "../utilities/userSlice";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleAuthClick = () => {
    if (user) {
      signOut(auth).catch((error) => {
        console.error("Sign out error:", error);
      });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when Header unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <header className="py-5 absolute top-0 left-1/2 -translate-x-1/2 w-full z-20">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img className="max-w-36 w-full" src={LOGO} alt="Netflix Logo" />
          </Link>
        </div>
        <div className="btn_wrapper flex items-center gap-3">
          {user && (
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
