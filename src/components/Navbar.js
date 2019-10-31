import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import CNMLogo from "../components/CNMLogo";
import {  Twitter } from "react-feather";

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
    <header role="banner" className="shadow bg-white relative">
      <div className="mx-auto container md:p-4 flex justify-between flex-wrap items-center">
        <Link to="/" className="font-semibold md:pr-8 w-24 md:w-32 order-none mx-auto md:mx-0 pt-4 md:pt-0">
          <CNMLogo />
        </Link>
        
        <nav role="navigation" className="w-full md:w-auto order-4 md:order-2 border-t flex text-center mt-4 py-2 md:py-0 md:mt-0 md:text-left md:border-t-0">
          <div  className={`block md:block md:flex md:items-center w-full md:w-auto`}>
            <ul role="menu" className="list-reset md:flex flex-1 items-center">
              <Link role="menuitem" className="p-3 py-2 uppercase text-black font-semibold text-sm tracking-wide">
                Home
              </Link>
              <Link to={'/tags/bernie-sanders/'} role="menuitem" className="p-3 py-2 uppercase text-black font-semibold text-sm tracking-wide">
                Bernie Sanders
              </Link>
              <Link to={'/tags/joe-biden/'} role="menuitem" className="p-3 py-2 uppercase text-black font-semibold text-sm tracking-wide">
                Boe Jiden
              </Link>
              
              

            </ul>
          </div>
        </nav>
        <div className="order-1 md:order-4">
           
          {/* <Twitter fill={'red'} /> */}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
