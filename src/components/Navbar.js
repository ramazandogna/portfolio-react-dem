import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
   return (
      <nav className="bg-white md:justify-center active:border-b-violet-300  border-b-violet-200 border-2 border-violet-400 px-2 sm:px-4 py-2.5 rounded">
         <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
               <span className="self-center active:underline  text-violet-500  hover:text-violet-800 text-xl font-semibold whitespace-nowrap ">
                  R.D Portfolio
               </span>
            </Link>

            <div className=" w-full md:block md:w-auto" id="navbar-default">
               <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-violet-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                  <li>
                     <Link
                        to="/"
                        className="block py-2 pl-3 pr-4 active:underline  text-white bg-violet-700 rounded md:bg-transparent md:text-violet-700 md:p-0"
                        aria-current="page"
                     >
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/about"
                        className="block py-2 pl-3 pr-4 active:underline  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-800 md:p-0 "
                     >
                        About
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/about"
                        className="block py-2 pl-3 pr-4 active:underline  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-800 md:p-0 "
                     >
                        Testomonial
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/about"
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-800 md:p-0 "
                     >
                        Contact Me
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
