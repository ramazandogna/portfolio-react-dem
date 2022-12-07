import Aboutjpg from '../assets/img/about.jpg';
import { Link } from 'react-router-dom';
import Perfil from '../assets/img/perfil.png';
import React from 'react';

function Presentation() {
   return (
      <>
         <section className=" min-h-screen gap-4">
            <div className=" mt-10 py-2 text-center ">
               <img
                  src={Perfil}
                  className="w-60 my-10 justify-center self-center mx-auto"
               />
               <h2 className=" text-5xl py-2 text-violet-500 hover:text-violet-700hover:">
                  Name Here
               </h2>
               <h3 className=" text-2xl mt-3">React, Web Developer.</h3>
               <p className=" max-w-4xl mx-auto  justify-center text-md py-5 text-gray-800 leading-8 mt-3 ">
                  Engineer student, trying to be web developer with using
                  Reactjs Engineer student, trying to be web developer with
                  using Reactjs Engineer student, trying to be web developer
                  with using Reactjs
               </p>
            </div>

            <div className="text-center">
               <a href="#about">
                  <button className=" justify-center px-10 py-5 rounded-tr-2xl rounded-bl-2xl bg-violet-600 text-xl text-white text-center hover:bg-violet-300 hover:text-black">
                     Scroll Down 👇🏻
                  </button>
               </a>
            </div>
         </section>
         <section
            id="about"
            className=" border-b-2 border-violet-300 border-t-2 min-h-screen gap-4"
         >
            <div className=" text-center">
               <h2 className=" text-5xl my-4 py-2">About Me</h2>
               <span className=" text-gray-700 text-sm ">My Introduction</span>
               <img
                  src={Aboutjpg}
                  className=" rounded-tr-xl rounded-bl-xl w-48 my-10 border-2 justify-center self-center mx-auto"
               />
               <p className="max-w-xl mx-auto py-2 m-10">
                  Some introduction about me, Some introduction about me, Some
                  introduction about me
               </p>
            </div>

            <div className="p-4 flex justify-evenly m-10">
               <div>
                  <span className="block text-center text-xl font-semibold text-gray-900 ">
                     01+
                  </span>
                  <span className="block text-center text-l">
                     Years <br /> Experience
                  </span>
               </div>
               <div>
                  <span className="block text-center text-xl font-semibold text-gray-900 ">
                     17+
                  </span>
                  <span className="block text-center text-l">
                     Completed <br /> Project
                  </span>
               </div>
               <div>
                  <span className="block text-center text-xl font-semibold text-gray-900 ">
                     02+
                  </span>
                  <span className="block text-center text-l">
                     Active <br /> Website
                  </span>
               </div>
            </div>
         </section>
         {/* <About /> */}
      </>
   );
}

export default Presentation;
