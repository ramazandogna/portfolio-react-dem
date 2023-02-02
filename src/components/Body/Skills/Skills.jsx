import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import React, { useState } from 'react';

import { FaReact } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import styles from './skills.module.css';

function Skills() {
   const [show, setShow] = useState(true);
   const [show1, setShow1] = useState(true);

   return (
      <section id="skills" className={styles.section}>
         <div>
            <h2 className={styles.title}>
               Skills <GiSkills />
            </h2>
            <p className={styles.skillsP}>My technical level</p>
         </div>
         <div className={styles.container}>
            <div className={styles.secondContainer}>
               <div
                  onClick={() => setShow(!show)}
                  className={styles.dropdownContainer}
               >
                  <div className={styles.skillContainer}>
                     <FaReact className={styles.skillIcon} />
                     <div className={styles.skillSubContainer}>
                        <h3 className={styles.skillTitle}>Frontend Skill</h3>

                        <p className={styles.skillP}>More then 1 years</p>
                     </div>
                  </div>
                  {show === true ? (
                     <AiOutlineArrowUp className={styles.upDownIcon} />
                  ) : (
                     <AiOutlineArrowDown className={styles.upDownIcon} />
                  )}
               </div>
               {show === true ? (
                  <div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>HTML5</div>
                           <div className={styles.skillItemPercentage}>
                              100%
                           </div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage100}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>CSS3</div>
                           <div className={styles.skillItemPercentage}>70%</div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage70}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>
                              Javascript
                           </div>
                           <div className={styles.skillItemPercentage}>60%</div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage60}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>React</div>
                           <div className={styles.skillItemPercentage}>
                              100%
                           </div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage100}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>Tailwind</div>
                           <div className={styles.skillItemPercentage}>80%</div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage80}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>Bootstrap</div>
                           <div className={styles.skillItemPercentage70}>
                              70%
                           </div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage70}></div>
                        </div>
                     </div>
                  </div>
               ) : null}
            </div>
            <div className={styles.secondContainer}>
               <div
                  onClick={() => setShow1(!show1)}
                  className={styles.dropdownContainer}
               >
                  <div className={styles.skillContainer}>
                     <FaReact className={styles.skillIcon} />
                     <div className={styles.skillSubContainer}>
                        <h3 className={styles.skillTitle}>Frontend Skill</h3>

                        <p className={styles.skillP}>More then 1 years</p>
                     </div>
                  </div>

                  {show1 === true ? (
                     <AiOutlineArrowUp className={styles.upDownIcon} />
                  ) : (
                     <AiOutlineArrowDown className={styles.upDownIcon} />
                  )}
               </div>
               {show1 === true ? (
                  <div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>HTML5</div>
                           <div className={styles.skillItemPercentage}>
                              100%
                           </div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage100}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>CSS3</div>
                           <div className={styles.skillItemPercentage}>70%</div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage70}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>
                              Javascript
                           </div>
                           <div className={styles.skillItemPercentage}>60%</div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage60}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>React</div>
                           <div className={styles.skillItemPercentage}>
                              100%
                           </div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage100}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>Tailwind</div>
                           <div className={styles.skillItemPercentage}>80%</div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage80}></div>
                        </div>
                     </div>
                     <div className={styles.skillsListContainer}>
                        <div className={styles.listContainerItems}>
                           <div className={styles.skillItemName}>Bootstrap</div>
                           <div className={styles.skillItemPercentage70}>
                              70%
                           </div>
                        </div>
                        <div className={styles.percentageBar}>
                           <div className={styles.percentage70}></div>
                        </div>
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
      </section>
   );
}

export default Skills;
