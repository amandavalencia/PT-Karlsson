import { useState } from "react";
import { HamburgerIcon } from "./Hamburgericon";
import { Navlinks } from "./NavLinks";

export const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <>
      <div className=" fixed top-0 right-0 m-6 z-50 md:hidden">
        <button
          onClick={toggleMenu}
          className=" bg-transparent focus:outline-none border-none"
        >
          <HamburgerIcon></HamburgerIcon>
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-10">
          <div className="flex flex-col absolute w-screen h-3/4 bg-greyBakground/70 gap-10 justify-center items-center text-2xl">
            <Navlinks toggleMenu={toggleMenu}></Navlinks>
          </div>
        </div>
      )}
    </>
  );
};
