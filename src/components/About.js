import Aboutjpg from '../assets/img/about.jpg';
import React from 'react';

function About() {
   return (
      <section className=" border-b-2 border-violet-300 border-t-2 min-h-screen gap-4">
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
   );
}

export default About;
