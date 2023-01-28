import React from 'react';
import styles from './header.module.css';

function Header() {
   return (
      <nav className={styles.nav}>
         <div className={styles.navDiv}>
            <a href="/">
               <span className={styles.logo}>ramazandoğan</span>
            </a>

            <div className={styles.navItemsContainer} id="navbar-default">
               <ul className={styles.navItems}>
                  <li>
                     <a href="/" className={styles.navItem} aria-current="page">
                        Home
                     </a>
                  </li>
                  <li>
                     <a href="/about" className={styles.navItem}>
                        About
                     </a>
                  </li>
                  <li>
                     <a href="/skills" className={styles.navItem}>
                        Skills
                     </a>
                  </li>
                  <li>
                     <a href="/about" className={styles.navItem}>
                        Testomonial
                     </a>
                  </li>
                  <li>
                     <a href="/about" className={styles.navItem}>
                        Contact Me
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Header;
