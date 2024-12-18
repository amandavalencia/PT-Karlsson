import { Outlet } from "react-router-dom";
import { DesktopNav } from "../components/nav/DesktopNav";
import { HamburgerMenu } from "../components/nav/HamburgerMenu";

export const Layout = () => {
  return (
    <>
      <DesktopNav></DesktopNav>
      <HamburgerMenu></HamburgerMenu>
      <main>
        <Outlet />
      </main>
    </>
  );
};
