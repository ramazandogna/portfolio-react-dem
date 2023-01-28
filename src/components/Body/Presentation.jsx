import { BiMouse } from 'react-icons/bi';
import Header from '../Header/Header';
import Perfil from '../../assets/img/perfil.png';
import React from 'react';
import styles from './presentation.module.css';

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

               <a href="#skills">
                  <button className={styles.contactButton}>Contact Me</button>
               </a>
            </div>
            <div>
               <img src={Perfil} alt="" className={styles.perfilImg} />
            </div>
            <a href="#about">
               <div className={styles.scrollDown}>
                  <BiMouse />{' '}
                  <span className={styles.scrollDownText}>Aşağı Kaydır</span>
               </div>
            </a>
         </div>
      </section>
   );
}

export default Presentation;
