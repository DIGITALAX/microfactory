import React from "react";
import styles from "./styles.module.scss";

const LandingFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.textLogo}>
          <a
          href="https://twitter.com/DIGITALAX_"
          target="_blank"
          rel="noreferrer" 
          >
          <img
            className={styles.imageLogo}
            src="/images/twitter.png"
            alt="twitter"
          />
          </a>

          <div className={styles.centerWrapper}>
            <div className={styles.textFooter}>
              it’s a dark forest out there.<br></br>
              stay vigilant &amp; curious.<br></br>
              <br></br>
              <br></br>
              made with cc0 love by the<br></br>
              DIGITALAX team.
          </div>
          </div>

          {/* <a
          href="https://twitter.com/DIGITALAX_"
          target="_blank"
          rel="noreferrer"
          >
          <img
            className={styles.cc0Logo}
            src="/images/cc0.png"
            alt="twitter"
          />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
