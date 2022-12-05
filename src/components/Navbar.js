import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
   return (
      <div className="flex">
         <Link
            to="/"
            className=" bg-orange-200 text-black p-4 align-center rounded-full mt-1 mr-1 ml-1 hover:bg-orange-400 hover:text-white"
         >
            <span>Ana Sayfa</span>
         </Link>
      </div>
   );
}

export default Navbar;
