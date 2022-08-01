import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import HowToSection from "@components/HowToSection";
import PFPSection from "@components/PFPSection";


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function Landing(props) {
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);
  // const account = useSelector(getAccount);
  // const chainId = useSelector(getChainId);
  // const user = useSelector(getUser);
  // const dispatch = useDispatch();

  useEffect(() => {
    screenWidth > 707 ? setIsMobile(false) : setIsMobile(true);
  }, [screenWidth]);


  return (
    <>
      {
        // !isMobile ?
        <div className={styles.wrapper}>
          <section className={styles.initSection} id="init_section">
            <div className={styles.imageWindow} id="image_window">
            <img src='/images/mf.png' className={styles.backImage} />
              {/* <video
                className={styles.backImage}
                autoPlay
                muted
                loop
                playsInline
                webkitPlaysInline
                id="back_image1"
              >
                <source src="/video/tvscene.mp4" />
              </video> */}
            </div>

            {/* <div className={styles.qrCodeGround}>
              <div className={[styles.qrCode, styles.qrCode2].join(' ')}>
                <img src='/images/homepage/qrCode.png' className={styles.qrCodeImage} />
              </div>
            </div>
            <div className={styles.qrCodeGround}>
              <div className={[styles.qrCode, styles.qrCode3].join(' ')}>
                <img src='/images/homepage/qrCode.png' className={styles.qrCodeImage} />
              </div>
            </div>
            <div className={styles.qrCodeGround}>
              <div className={[styles.qrCode, styles.qrCode4].join(' ')}>
                <img src='/images/homepage/qrCode.png' className={styles.qrCodeImage} />
              </div>
            </div> */}

            <div className={styles.mainPart}>
              <h1 id="title">
                Renewable<br></br> Web3 <br></br>Co-Ops
              </h1>

              {/* <img
                src="/images/homepage/1.png"
                className={styles.initImage1}
                id="init_image1"
              />
              <img
                src="/images/homepage/2.png"
                className={styles.initImage3}
                id="init_image3"
              />
              <img
                src="/images/homepage/3.png"
                className={styles.initImage2}
                id="init_image2"
              />
              <img
                src="/images/homepage/4.png"
                className={styles.initImage4}
                id="init_image4"
              /> */}

             
            </div>
              </section>
          <section className={styles.howtoSection} id="howto_section">
            <HowToSection />
          </section>
          <section className={styles.pfpSection} id="pfp_section">
            <PFPSection style1="style1" clickedStyle="clickedStyle"/>
          </section>
        
        </div>
      }
    </>
  );
}

export default Landing;
