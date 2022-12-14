import Perfil from '../assets/img/perfil.png';
import React from 'react';

function Presentation() {
   return (
      <div>
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

               <a href="#skills">
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
      </div>
   );
}

export default Presentation;
