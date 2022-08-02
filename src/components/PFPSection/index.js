import React, { useState } from "react";
import RedButton from "@components/RedButton";
import styles from "./styles.module.scss";

const guideImages = [
  '/images/homepage/pfp/panel1.png',
]

const PFPSection = (props) => {

  const [clicked, setClicked]=useState(props.style1);

  const clickMe = () => {
    setClicked(props.clickedStyle);

  }

  return (
    <div className={styles.PFPSectionWrapper}>



      <div className={styles.title}>
      Each instructable collected, shared and recycled puts another pixel <br></br> brick on the build map for a hyper-local web3 microfactory, virtually, <br></br>and possibly IRL, near you.
      </div>
      <RedButton className={styles.pfpButton} onClick={clickMe}>
      Mint Live Soon
      </RedButton>
      {/* <div className={styles.style1}>
      Read <a href="https://www.digifizzy.xyz/" style={{ color: "white" }} >DIGIFIZZY</a> while you wait.
      </div> */}
      
    </div>
  );
};

export default PFPSection;
