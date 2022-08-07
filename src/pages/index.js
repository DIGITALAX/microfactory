import React, { useState } from "react";
import styles from "./styles.module.scss";
import MintSection from "@components/MintSection";
import LocalProduction from "@components/LocalProduction";

function Landing() {

  return (
    <>
      {
        <div className={styles.wrapper}>
          <section className={styles.initSection} id="init_section">
            <div className={styles.imageWindow} id="image_window">
            <img src='/images/mf.png' className={styles.backImage} />
            </div>

            <div className={styles.mainPart}>
              <h1 id="title">
                Renewable<br></br> Web3 <br></br>Co-Ops
              </h1>
             
            </div>
              </section>
          <section className={styles.howtoSection} id="howto_section">
            <LocalProduction />
          </section>
          <section className={styles.pfpSection} id="pfp_section">
            <MintSection/>
          </section>
        
        </div>
      }
    </>
  );
}

export default Landing;
