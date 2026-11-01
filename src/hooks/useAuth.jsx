import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from "../utilities/userSlice";
import { USER_AVATAR } from "../utilities/constants";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [authError, setAuthError] = useState(null);

  // Global Auth State Observer & Route Guard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  // Sign In Action
  const login = async (email, password) => {
    setAuthError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      setAuthError(error.message);
      return false;
    }
  };

  // Sign Up Action
  const signup = async (name, email, password) => {
    setAuthError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: USER_AVATAR,
      });

      const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
      return true;
    } catch (error) {
      setAuthError(error.message);
      return false;
    }
  };

  // Sign Out Action
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return {
    user,
    login,
    signup,
    logout,
    authError,
    setAuthError,
  };
};

export default useAuth;
