import {
   AiFillCaretDown,
   AiFillLinkedin,
   AiOutlineInstagram,
   AiOutlineTwitter,
} from 'react-icons/ai';

import { FaQuoteLeft } from 'react-icons/fa';
import React from 'react';
import { RxBorderDashed } from 'react-icons/rx';
import styles from './footer.module.css';

function Footer() {
   return (
      <section className={styles.section}>
         <div className={styles.secondSection}>
            <div className={styles.topQuoteIcon}>
               <FaQuoteLeft />
            </div>
            <div className={styles.quote}>
               İyi eleman seç, iyi para ver. <br /> Çünkü kötü eleman, sana
               pahalıya mal olur. <br />
               <div className={styles.quoteName}>Vehbi Koç</div>
            </div>
            <div className={styles.quoteBorder}>
               <RxBorderDashed />
            </div>
         </div>
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
