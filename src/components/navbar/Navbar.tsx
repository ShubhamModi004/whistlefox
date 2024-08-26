import React from "react";

import styles from "./Navbar.module.scss";
import Image from "next/image";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <Link href={"/"} className={styles["logo_section"]}>
          <Image src="/assets/logo.png" width={300} height={35} alt="Logo" />
          {/* <p>Whistlefox Industries</p> */}
        </Link>
        {/* <div className={styles["nav_section"]}>
          <Link href="/Services">Services</Link>
          <Link href="/Services">About</Link>
          <Link href="/Services">Contact</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
