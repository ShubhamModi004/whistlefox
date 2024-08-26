import React from "react";
import styles from "./India.module.scss";
import Image from "next/image";

const India = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <div className={styles["left_section"]}>
          <h2>Our Expansion to India 🇮🇳</h2>
          <p>
            Recognizing the dynamic market opportunities and the growing demand
            for high-quality apparel, Whistlefox Industries is excited to
            announce its expansion into the Indian market. India’s rich heritage
            in textile manufacturing, particularly in hosiery products, aligns
            perfectly with our commitment to excellence. We are proud to share
            that all our hosiery items will be manufactured in India, leveraging
            the country’s renowned expertise in this domain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default India;
