import React, { useState } from "react";
import YellowButton from "@components/YellowButton";
import styles from "./styles.module.scss";

const guideImages = [
  '/images/homepage/pfp/panel1.png',
]

const MintSection = (props) => {

  const [clicked, setClicked] = useState(styles.style1);

  const clickMe = () => {
    setClicked(styles.clickedStyle);
  }

  return (
    <div className={styles.PFPSectionWrapper}>



      <div className={styles.title}>
      Each instructable collected, shared and recycled puts another pixel <br></br> brick on the build map for a hyper-local web3 microfactory, virtually, <br></br>and possibly IRL, near you.
      </div>
      <YellowButton className={styles.pfpButton} onClick={clickMe}>
      Mint Live Soon
      </YellowButton>
      {/* <div className={styles.clickedStyle}>
      Read <a href="https://www.port15.digifizzy.xyz/" target="_blank" rel="noreferrer"  style={{ color: "white" }} >DIGIFIZZY</a> while you wait.
      </div> */}
      
    </div>
  );
};

export default MintSection;
