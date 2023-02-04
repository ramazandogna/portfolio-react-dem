import React from 'react';
import styles from '../styles/header.module.css';

function Header() {
   return (
      <div className={styles.nav}>
         <div className={styles.navDiv}>
            <a href="/">
               <span className={styles.logo}>ramazandoğan</span>
            </a>

            <div className={styles.navItemsContainer} id="navbar-default">
               <ul className={styles.navItems}>
                  <li>
                     <a href="#Contact" className={styles.navItem}>
                        Contact
                     </a>
                  </li>
                  <li>
                     <a href="#about" className={styles.navItem}>
                        About
                     </a>
                  </li>
                  <li>
                     <a href="#skills" className={styles.navItem}>
                        Skills
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Header;
