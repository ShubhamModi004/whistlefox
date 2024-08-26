import React from 'react';
import styles from "./Footer.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <div className={styles["left_section"]}>
          <h2>Contact Us</h2>
          <p>For more information about our products or to become a part of the Whistlefox family, please reach out to us. We are eager to connect and collaborate as we continue to expand our global footprint.</p>
        </div>

        <div className={styles["social_icon"]}>
          <a href="mailto:whistlefox23@gmail.com">
          <Image
            src="/assets/email.png"
            width={24}
            height={24}
            alt="hero"
          />
          </a>
          <a href="tel:+642041438301">
          <Image
            src="/assets/phone-call.png"
            width={24}
            height={24}
            alt="hero"
          />
          </a>
          <a href="https://maps.app.goo.gl/XLTa7WPuMPm3xsEk8" target="_blank">
          <Image
            src="/assets/pin.png"
            width={24}
            height={24}
            alt="hero"
          />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer