import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

interface IToggleMenu {
  toggleMenu?: () => void;
}

export const Navlinks = ({ toggleMenu }: IToggleMenu) => {
  const { user, signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    if (toggleMenu) toggleMenu();
    signOut();
  };

  return (
    <>
      <NavLink className="navLink" to={"/"} onClick={toggleMenu}>
        Hem
      </NavLink>

      <NavLink
        className="navLink"
        to={"/TrainingPrograms"}
        onClick={toggleMenu}
      >
        Tränings program
      </NavLink>

      <Link
        to="about"
        smooth={true}
        duration={500}
        className="navLink"
        onClick={toggleMenu}
      >
        Om Martin
      </Link>

      <NavLink className="navLink" to={"/MyPage"} onClick={toggleMenu}>
        Mina sidor
      </NavLink>

      {!user ? (
        <NavLink className="navLink" to={"/LogIn"} onClick={toggleMenu}>
          Logga in
        </NavLink>
      ) : (
        <NavLink className="navLink" to={"/"} onClick={handleSignOut}>
          Logga ut
        </NavLink>
      )}
    </>
  );
};
