import About from './About';
import { Link } from 'react-router-dom';
import React from 'react';

function Presentation() {
   return (
      <div>
         <div className=" mt-10 p-10 text-center ">
            <h1 className=" text-5xl text-violet-500 hover:text-violet-700hover:">
               Ramazan Doğan
            </h1>
            <h2 className=" text-2xl mt-3">React, Web Developer.</h2>
            <p className=" max-w-4xl  justify-center text-md py-5 text-gray-800 leading-8 mt-3">
               Engineer student, trying to be web developer with using Reactjs
               Engineer student, trying to be web developer with using Reactjs
               Engineer student, trying to be web developer with using Reactjs
            </p>
         </div>
         {/* <div className="flex justify-center gap-16 ">
            <Link to="">
               <button className=" text-3xl w-20 h-20 bg-gray-600 text-white hover:bg-slate-800 hover:bg-gray-900 ">
                  G
               </button>
            </Link>
            <Link to="">
               <button className=" text-3xl w-20 h-20 text-center bg-gray-600 text-white hover:bg-blue-400 hover:bg-gray-900 ">
                  L
               </button>
            </Link>
            <Link to="">
               <button className=" text-3xl w-20 h-20 text-center bg-gray-600 hover:bg-cyan-400 hover:bg-gray-900 ">
                  T
               </button>
            </Link>
         </div> */}
         <div className=" mt-3 text-center">
            <button className=" px-10 py-5 rounded-tr-2xl rounded-bl-2xl bg-violet-600 text-xl text-white text-center hover:bg-violet-300 hover:text-black">
               Scroll Down 👇🏻
            </button>
         </div>
         <About />
      </div>
   );
}

export default Presentation;
