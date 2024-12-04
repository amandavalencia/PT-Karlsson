import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav className="fixed top-0 right-0 m-6">
        <ul className="flex space-x-6">
          <NavLink className="navLink" to={"/"}>
            Hem
          </NavLink>
          <NavLink className="navLink" to={"/TrainingPrograms"}>
            Tränings program
          </NavLink>
          <NavLink className="navLink" to={"/MyPage"}>
            Mina sidor
          </NavLink>
          <NavLink className="navLink" to={"/About"}>
            Om Martin
          </NavLink>
          <NavLink className="navLink" to={"/LogIn"}>
            Logga in
          </NavLink>
        </ul>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </>
  );
};
