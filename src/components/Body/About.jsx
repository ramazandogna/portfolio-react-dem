import Aboutjpg from '../../assets/img/about.jpg';
import React from 'react';
import styles from './presentation.module.css';

function About() {
   return (
      <section id="about" className={styles.aboutSection}>
         <div className={styles.aboutFirstDiv}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <span className={styles.aboutSubTitle}>My Introduction</span>
         </div>
         <div className={styles.imgContainer}>
            <img src={Aboutjpg} className={styles.aboutImg} />
            <div>
               <div className={styles.aboutDesc}>
                  <p className={styles.aboutDescription}>
                     Some introduction about me, Some introduction about me,
                     Some introduction about me Some introduction about me, Some
                     introduction about me, Some introduction about me Some
                     introduction about me, Some introduction about me, Some
                     introduction about me
                  </p>
               </div>
               <div className={styles.experiences}>
                  <div>
                     <span className={styles.experiencesYear}>01+</span>
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
