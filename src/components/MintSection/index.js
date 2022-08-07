import React, { useState } from "react";
import YellowButton from "@components/YellowButton";
import styles from "./styles.module.scss";
import { stubTrue } from "lodash";

const MintSection = () => {

  const [styleState, setStyleState] = useState(false);

  const setStyleClicked = () => {
    styleState ? setStyleState(false): setStyleState(true);
  }

  console.log(styleState);

  return (
    <div className={styles.PFPSectionWrapper}>



      <div className={styles.title}>
      Each instructable collected, shared and recycled puts another pixel <br></br> brick on the build map for a hyper-local web3 microfactory, virtually, <br></br>and possibly IRL, near you.
      </div>
      <button className={styles.pfpButton} onClick={setStyleClicked}>
      Mint Live Soon
      </button>
      <p className={styleState ? styles.styleClicked : styles.style1}>
        <a href="https://port15.digifizzy.xyz/magazines/15/" target="_blank" rel="noreferrer"  className={styles.linked}>Read DIGIFIZZY while you wait.</a>
      </p>
      
    </div>
  );
};

export default MintSection;
