import Perfil from '../../assets/img/perfil.png';
import React from 'react';
import styles from './presentation.module.css';

function Presentation() {
   return (
      <section className={styles.presentation}>
         <div className={styles.firstDiv}>
            <h2 className={styles.title}>Name Here</h2>
            <h3 className={styles.subTitle}>React, Web Developer.</h3>
            <p className={styles.resume}>
               Engineer student, trying to be web developer with using Reactjs
               Engineer student, trying to be web developer with using Reactjs
               Engineer student, trying to be web developer using Reactjs
               Engineer student, trying to be web developer using Reactjs
               Engineer student, trying to be web developer with using Reactjs
            </p>

            <a href="#skills">
               <button className={styles.contactButton}>Contact Me</button>
            </a>
         </div>
         <div>
            <img src={Perfil} className={styles.perfilImg} />
         </div>
         <a href="#about">
            <div className={styles.scrollDown}>Aşağı Kaydır</div>
         </a>
      </section>
   );
}

export default Presentation;
