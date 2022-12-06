import About from './About';
import { Link } from 'react-router-dom';
import React from 'react';

function Presentation() {
   return (
      <>
         <section className=" min-h-screen gap-4">
            <div className=" mt-10 py-2 text-center ">
               <h2 className=" text-5xl py-2 text-violet-500 hover:text-violet-700hover:">
                  Ramazan Doğan
               </h2>
               <h3 className=" text-2xl mt-3">React, Web Developer.</h3>
               <p className=" max-w-4xl mx-auto  justify-center text-md py-5 text-gray-800 leading-8 mt-3 ">
                  Engineer student, trying to be web developer with using
                  Reactjs Engineer student, trying to be web developer with
                  using Reactjs Engineer student, trying to be web developer
                  with using Reactjs
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
               <button className=" justify-center px-10 py-5 rounded-tr-2xl rounded-bl-2xl bg-violet-600 text-xl text-white text-center hover:bg-violet-300 hover:text-black">
                  Scroll Down 👇🏻
               </button>
            </div>
         </section>
         <About />
      </>
   );
}

export default Presentation;
