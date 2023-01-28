import { AiFillCheckCircle, AiFillHeart } from 'react-icons/ai';

import Aboutjpg from '../../assets/img/about.jpg';
import { FiTarget } from 'react-icons/fi';
import React from 'react';
import styles from './presentation.module.css';

function About() {
   return (
      <section id="about" className={styles.aboutSection}>
         <div className={styles.aboutFirstDiv}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <div className={styles.aboutSubTitle}>My Introduction</div>
         </div>
         <div className={styles.imgContainer}>
            <img src={Aboutjpg} alt="" className={styles.aboutImg} />
            <div>
               <div className={styles.aboutDesc}>
                  <p className={styles.aboutDescription}>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. It has survived not only five
                     centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged. It was popularised in the
                     1960s with the release of Letraset sheets containing Lorem
                     Ipsum passages, and more recently with desktop publishing
                     software like Aldus PageMaker including versions of Lorem
                     Ipsum.
                  </p>
               </div>
               <div className={styles.experiences}>
                  <div className={styles.experiencesBorder}>
                     <span className={styles.experiencesYear}>01+</span>
                     <span className={styles.experiencesText}>
                        Years <br /> Experience
                     </span>
                  </div>
                  <div className={styles.experiencesBorder}>
                     <span className={styles.experiencesYear}>17+</span>
                     <span className={styles.experiencesText}>
                        Completed <br /> Project
                     </span>
                  </div>
                  <div className={styles.experiencesBorder}>
                     <span className={styles.experiencesYear}>02+</span>
                     <span className={styles.experiencesText}>
                        Active <br /> Website
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.guarantee}>
            <div>
               <div className={styles.quaranteeItem}>
                  <AiFillCheckCircle />
               </div>
               <h4 className={styles.quaranteeTitle}>Easy to Apply</h4>
               <p className={styles.quaranteeP}>
                  So easy to check, <br />
                  even your child could do it.
               </p>
            </div>
            <div>
               <div className={styles.quaranteeItem}>
                  <FiTarget />
               </div>
               <h4 className={styles.quaranteeTitle}>Elite Clientele</h4>
               <p className={styles.quaranteeP}>
                  We have all the work, the <br /> greatest work.
               </p>
            </div>
            <div>
               <div className={styles.quaranteeItem}>
                  <AiFillHeart />
               </div>
               <h4 className={styles.quaranteeTitle}>Service Guarantee</h4>
               <p className={styles.quaranteeP}>
                  Find the love of your fronten and <br /> start full support
               </p>
            </div>
         </div>
      </section>
   );
}

export default About;
