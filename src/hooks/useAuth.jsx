import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../utilities/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);
};

export default useAuth;

