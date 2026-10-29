import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleAuthClick = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Sign out error:", error);
        });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="py-5 absolute top-0 left-1/2 -translate-x-1/2 w-full z-20">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img
              className="max-w-36 w-full"
              src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
              alt="Netflix Logo"
            />
          </Link>
        </div>
        <div className="btn_wrapper flex items-center gap-3">
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
