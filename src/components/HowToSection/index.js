import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";

const HowToSection = () => {
  
  return (
    <div className={styles.howToSectionWrapper}>
      <ul className={styles.category}>
        <li>Combining ageless techniques with near future tech, made cost effective today with web3.</li>
      </ul>

      <div className={styles.grid}>
          <img className={styles.individualGrid} src='/images/one.png'/>
          <img className={styles.individualGrid} src='/images/two.png'/>
          <img className={styles.individualGrid} src='/images/three.png'/>
          <img className={styles.individualGrid} src='/images/four.png'/>
          <img className={styles.individualGrid} src='/images/five.png'/>

          <img className={styles.individualGrid} src='/images/six.png'/>
          <img className={styles.individualGrid} src='/images/seven.png'/>
          <img className={styles.individualGrid} src='/images/eight.png'/>
          <img className={styles.individualGrid} src='/images/nine.png'/>
          <img className={styles.individualGrid} src='/images/ten.png'/>

          <img className={styles.individualGrid} src='/images/eleven.png'/>
          <img className={styles.individualGrid} src='/images/twelve.png'/>
          <img className={styles.individualGrid} src='/images/thirteen.png'/>
          <img className={styles.individualGrid} src='/images/fourteen.png'/>
          <img className={styles.individualGrid} src='/images/fifteen.png'/>
        </div>

    </div>
  );
};

export default HowToSection;
