import Aboutjpg from '../assets/img/about.jpg';
import { Link } from 'react-router-dom';
import Perfil from '../assets/img/perfil.png';
import React from 'react';

function Presentation() {
   return (
      <>
         <section className=" grid mt-20 mx-40 grid-cols-2 min-h-screen gap-4">
            <div className="  py-2 text-center ">
               <h2 className=" text-5xl py-2 text-violet-500 hover:text-violet-700hover:">
                  Name Here
               </h2>
               <h3 className=" text-lg">React, Web Developer.</h3>
               <p className=" max-w-4xl mx-auto  justify-center text-md py-5 text-gray-800  mt-3 ">
                  Engineer student, trying to be web developer with using
                  Reactjs Engineer student, trying to be web developer with
                  using Reactjs Engineer student, trying to be web developer
                  using Reactjs Engineer student, trying to be web developer
                  using Reactjs Engineer student, trying to be web developer
                  with using Reactjs
               </p>

               <a href="#about">
                  <button className="px-10 py-3 rounded-tr-2xl rounded-bl-2xl bg-violet-600 text-xl text-white text-center hover:bg-violet-300 hover:text-black">
                     Contact Me
                  </button>
               </a>
            </div>
            <div>
               <img
                  src={Perfil}
                  className="w-60 my-10 justify-center self-center mx-auto"
               />
            </div>
            <a href="#about">
               <div className="flex right-0 left-0 ml-auto mr-auto hover:text-cyan-100">
                  Aşağı Kaydır
               </div>
            </a>
         </section>
         <section className=" border-b-2 border-violet-300 border-t-2 min-h-screen gap-4">
            <div className=" py-10 text-center">
               <h2 className=" font-semibold text-5xl my-4 py-2">About Me</h2>
               <span className=" text-gray-700 text-sm ">My Introduction</span>
            </div>
            <div className=" grid-cols-2 grid mx-40  ">
               <img
                  src={Aboutjpg}
                  className="rounded-full w-96 my-10 border-2 justify-center self-center mx-auto"
               />
               <div>
                  <div className=" grid text-center">
                     <p className="max-w-xl mx-auto py-2 m-10">
                        Some introduction about me, Some introduction about me,
                        Some introduction about me Some introduction about me,
                        Some introduction about me, Some introduction about me
                        Some introduction about me, Some introduction about me,
                        Some introduction about me
                     </p>
                  </div>
                  <div className="p-4 flex justify-evenly">
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
               </div>
            </div>
         </section>
         {/* <About /> */}
      </>
   );
}

export default Presentation;
