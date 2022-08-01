import React from "react";
import Link from "next/link";

// import { getUser } from "@selectors/user.selectors";

import styles from "./styles.module.scss";

const HeaderTopLine = () => {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerText}>
        MICROFACTORY 
      </div>
      <Link href="https://port15.digifizzy.xyz/magazines/15/" target="_blank" rel="noreferrer">
        <img src="/images/logo.png" className={styles.logo} />
      </Link>
    </div>
  );
};

export default HeaderTopLine;
