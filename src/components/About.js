import Aboutjpg from '../assets/img/about.jpg';
import React from 'react';

function About() {
   return (
      <section
         id="about"
         className=" border-b-2 border-violet-300 border-t-2 min-h-screen gap-4"
      >
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
                     Some introduction about me Some introduction about me, Some
                     introduction about me, Some introduction about me Some
                     introduction about me, Some introduction about me, Some
                     introduction about me
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
   );
}

export default About;
