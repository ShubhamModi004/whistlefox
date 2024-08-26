import React from 'react'
import styles from "./About.module.scss";
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <div className={styles["right_section"]}>
          <div className={styles["image_wrapper"]}>
          <Image
            src="/assets/About.webp"
            layout="fill"
            objectFit="cover"
            alt="hero"
          />
          </div>
        </div>
        <div className={styles["left_section"]}>
          <h2>Mission statement</h2>
          <p>At Whistlefox Industries Private Limited, our mission is to create high-quality, comfortable, and stylish clothing that meets the diverse needs of our global customers. We are committed to sustainable practices, innovative designs, and ensuring that every garment we produce reflects our passion for excellence and our dedication to customer satisfaction.</p>
        </div>
        
      </div>
    </div>
  )
}

export default About;