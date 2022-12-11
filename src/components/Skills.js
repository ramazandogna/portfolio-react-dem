import '../index.css';

import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import React, { useState } from 'react';

import { FaReact } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

function Skills() {
   const [show, setShow] = useState(false);
   const [show1, setShow1] = useState(false);

   return (
      <div className=" max-w-full  ">
         <section id="skills">
            <h2 className=" flex justify-center text-5xl text-violet-600 py-2 mt-10">
               Skills <GiSkills />
            </h2>
            <p className=" text-center text-gray-600 text-xs py-2 ">
               My technical level
            </p>
         </section>
         <div className=" bg-violet-50 py-2 gap-y-0">
            <div
               onClick={() => setShow(!show)}
               className=" flex items-center justify-between mx-48 my-10 cursor-pointer bg-gray-100 rounded-full p-2 box-border "
            >
               <div className="flex items-center">
                  <FaReact className="text-6xl " />
                  <div className=" ml-2 block items-center">
                     <h3 className=" font-semibold text-2xl">Frontend Skill</h3>

                     <p className="text-base text-gray-600 ">
                        More then 1 years
                     </p>
                  </div>
               </div>
               {show === true ? (
                  <AiOutlineArrowUp className=" text-3xl" />
               ) : (
                  <AiOutlineArrowDown className=" text-3xl" />
               )}
            </div>
            {show === true ? (
               <div>
                  <div className="w-1/2 relative left-0 right-0 mr-auto ml-auto">
                     <div className=" flex justify-between">
                        <div className="text-gray-600 mb-1 text-base font-medium">
                           HTML5
                        </div>
                        <div className="text-gray-600  relative right-0 top-0 mb-1 text-base font-medium">
                           100%
                        </div>
                     </div>
                     <div className=" bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-violet-600 w-full h-1.5 rounded-full dark:bg-violet-500"></div>
                     </div>
                  </div>
                  <div className="w-1/2 relative left-0 right-0 mr-auto ml-auto">
                     <div className=" flex justify-between">
                        <div className="text-gray-600 mb-1 text-base font-medium">
                           CSS3
                        </div>
                        <div className="text-gray-600  relative right-0 top-0 mb-1 text-base font-medium">
                           70%
                        </div>
                     </div>
                     <div className=" bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-violet-600 w-9/12 h-1.5 rounded-full dark:bg-violet-500"></div>
                     </div>
                  </div>
                  <div className="w-1/2 relative left-0 right-0 mr-auto ml-auto">
                     <div className=" flex justify-between">
                        <div className="text-gray-600 mb-1 text-base font-medium">
                           JAVASCRIPT
                        </div>
                        <div className="text-gray-600  relative right-0 top-0 mb-1 text-base font-medium">
                           60%
                        </div>
                     </div>
                     <div className=" bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-violet-600 w-8/12 h-1.5 rounded-full dark:bg-violet-500"></div>
                     </div>
                  </div>
                  <div className="w-1/2 relative left-0 right-0 mr-auto ml-auto">
                     <div className=" flex justify-between">
                        <div className="text-gray-600 mb-1 text-base font-medium">
                           REACT
                        </div>
                        <div className="text-gray-600  relative right-0 top-0 mb-1 text-base font-medium">
                           100%
                        </div>
                     </div>
                     <div className=" bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-violet-600 w-12/12 h-1.5 rounded-full dark:bg-violet-500"></div>
                     </div>
                  </div>
                  <div className="w-1/2 relative left-0 right-0 mr-auto ml-auto">
                     <div className=" flex justify-between">
                        <div className="text-gray-600 mb-1 text-base font-medium">
                           TAILWIND
                        </div>
                        <div className="text-gray-600 relative right-0 top-0 mb-1 text-base font-medium">
                           100%
                        </div>
                     </div>
                     <div className=" bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-violet-600 w-12/12 h-1.5 rounded-full dark:bg-violet-500"></div>
                     </div>
                  </div>
                  <div className="w-1/2 relative left-0 right-0 mr-auto ml-auto">
                     <div className=" flex justify-between">
                        <div className=" text-gray-600 mb-1  text-base font-medium">
                           BOOTSTRAP
                        </div>
                        <div className="text-gray-600 relative right-0 top-0 mb-1 text-base font-medium">
                           70%
                        </div>
                     </div>
                     <div className=" bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-violet-600 w-9/12 h-1.5 rounded-full dark:bg-violet-500"></div>
                     </div>
                  </div>
               </div>
            ) : null}
         </div>
      </div>
   );
}

export default Skills;
