import {
   AiFillCaretDown,
   AiFillLinkedin,
   AiOutlineInstagram,
   AiOutlineTwitter,
} from 'react-icons/ai';

import React from 'react';
import styles from './footer.module.css';

function Footer() {
   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <p className={styles.footerParag}>
               There is no important who you are, <br /> just say hi! to me in
               this
               <br /> social medias
            </p>
            <div className={styles.pToB}>
               <AiFillCaretDown />
            </div>
            <div className={styles.buttons}>
               <button className={styles.button}>
                  <AiOutlineInstagram
                     id="igbutton"
                     className={styles.buttonIcon}
                  />
                  Instagram
               </button>
               <button id="libutton" className={styles.button}>
                  <AiFillLinkedin className={styles.buttonIcon} />
                  LinkedIn
               </button>
               <button id="twbutton" className={styles.button}>
                  <AiOutlineTwitter className={styles.buttonIcon} />
                  Twitter
               </button>
            </div>
         </div>
         <div className={styles.copyright}>© Copyright 2023 Ramazan Doğan</div>
      </section>
   );
}

export default Footer;
