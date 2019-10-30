import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import CNMLogo from "../components/CNMLogo";

function NavBar({ siteTitle }) {
  const [menuExpanded, setMenuExpanded] = useState(true);

  function toggleMenu() {
    menuExpanded ? setMenuExpanded(false) : setMenuExpanded(true);
  }

  const HamburgerMenu = (
    <svg
      className="fill-current h-6 w-6"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  );

  return (
    <header role="banner" className="shadow">
      <div className="mx-auto container p-4 flex flex-wrap items-center">
        <Link to="/" className="font-semibold md:pr-8 w-32">
          <CNMLogo />
        </Link>
        <button
          onClick={toggleMenu}
          className="block md:hidden border border-white ml-auto flex items-center px-3 py-2 rounded"
        >
          {HamburgerMenu}
        </button>
        <nav role="navigation" className="w-full md:w-auto">
          <div
            className={
              `block md:block md:flex md:items-center w-full md:w-auto` +
              (menuExpanded ? " hidden" : "")
            }
          >
            <ul role="menu" className="list-reset md:flex flex-1 items-center">
              <Link role="menuitem" className="p-3 py-2">
                Home
              </Link>
              <Link to={'/tags/bernie-sanders/'} role="menuitem" className="p-3 py-2">
                Bernie Sanders
              </Link>
              

            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
