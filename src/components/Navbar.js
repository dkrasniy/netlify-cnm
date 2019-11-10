import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import CNMLogo from "../components/CNMLogo";
import {  Twitter } from "react-feather";

function NavBar() {
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
  const  TwitterIconBS = (<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"   className="w-5 h-5 text-white fill-current"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>)
 
  return (
    <header role="banner" className="shadow bg-red-500 relative">
      <div className="mx-auto container-md-up container md:p-4 flex justify-between flex-wrap items-center">
        <Link to="/" className="font-semibold md:pr-8 w-24 md:w-32 order-none mx-auto md:mx-0 pt-4 md:pt-0">
          <CNMLogo fill={"#fff"} />
        </Link>
        <div className="absolute block md:hidden md:order-4 mr-12 order-1 right-0 text-white top-0" style={{'top':'22%'}}> <a href="https://twitter.com/CNMneews" rel="noopener noreferrer" target="_blank"> {TwitterIconBS}</a>
        </div>
        
        <nav role="navigation" className="bg-gray-200 md:bg-red-500 w-full md:w-auto order-4 md:order-2 flex text-center mt-4 py-2 md:py-0 md:mt-0 md:text-left ">
          <div  className={`block md:block md:flex md:items-center w-full md:w-auto`}>
            <ul role="menu" className="list-reset md:flex flex-1 items-center">
              <Link role="menuitem" className="p-3 py-2 uppercase text-black md:text-white font-semibold hover:text-gray-200 text-sm tracking-wide">
                Home
              </Link>
              <Link to={'/tags/bernie-sanders/'} role="menuitem" className="p-3 py-2 uppercase text-black hover:text-gray-200 md:text-white font-semibold text-sm tracking-wide">
                Bernie Sanders
              </Link>
              <Link to={'/tags/mayor-pete/'} role="menuitem" className="p-3 py-2 uppercase text-black hover:text-gray-200 md:text-white font-semibold text-sm tracking-wide">
                Mayor Pete
              </Link>
              <Link to={'/tags/joe-biden/'} role="menuitem" className="p-3 py-2 uppercase text-black hover:text-gray-200 md:text-white font-semibold text-sm tracking-wide">
                Boe Jiden
              </Link>
            
            </ul>
          </div>
        </nav>
        <div className="order-1 md:order-4 hidden md:block"> <a href="https://twitter.com/CNMneews" rel="noopener noreferrer" target="_blank"> {TwitterIconBS}</a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
