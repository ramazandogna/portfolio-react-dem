import { BiMouse } from 'react-icons/bi';
import CV from '../assets/pdf/ramazan-resume.pdf';
import Header from '../components/Header.jsx';
import Perfil from '../assets/img/project.png';
import React from 'react';
import styles from '../styles/presentation.module.css';

function Presentation() {
   return (
      <section className={styles.presentationBg}>
         <Header />
         <div className={styles.presentation}>
            <div className={styles.firstDiv}>
               <h2 className={styles.title}>Web Developer</h2>
               <p className={styles.resume}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <a href={CV} download={CV}>
                  <button className={styles.contactButton}>Download CV</button>
               </a>
            </div>
            <div>
               <img src={Perfil} alt="" className={styles.perfilImg} />
            </div>
         </div>

         <a href="#about">
            <div className={styles.scrollDown}>
               <BiMouse />
               <span className={styles.scrollDownText}>Aşağı Kaydır</span>
            </div>
         </a>
      </section>
   );
}

export default Presentation;
