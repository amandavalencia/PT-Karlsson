import { Navlinks } from "./NavLinks";

export const DesktopNav = () => {
  return (
    <>
      <nav className="hidden md:block fixed top-0 right-0 m-6">
        <ul className="flex space-x-6">
          <Navlinks></Navlinks>
        </ul>
      </nav>
    </>
  );
};
