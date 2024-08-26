import React from 'react';
import styles from "./HeroSection.module.scss";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <div className={styles["left_section"]}>
          <h1>Fashion Designed for You</h1>
          <p>Whistlefox Industries is a fashion design club that provides quality and innovative clothing solutions. Our focus on customer satisfaction has made us a trusted brand in the clothing industry.</p>
        </div>
        <div className={styles["right_section"]}>
          <div className={styles["image_wrapper"]}>
          <Image
            src="/assets/hero_section.webp"
            layout="fill"
            objectFit="cover"
            alt="hero"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection