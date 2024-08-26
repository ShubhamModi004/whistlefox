import React from "react";
import styles from "./Services.module.scss";

// images
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <h2>Our services</h2>
        <div className={styles["services_container"]}>
          <div className={styles["service"]}>
            <div className={styles["img_container"]}>
              <Image
                src="/assets/fashion_design.webp"
                layout="fill"
                objectFit="cover"
                alt="fashion design"
              />
            </div>
            <h3>Fashion Design</h3>
            <p>
            We create unique and innovative fashion designs that reflect the personality and style of our clients, while also being functional and stylish.
            </p>
          </div>
          <div className={styles["service"]}>
            <div className={styles["img_container"]}>
              <Image
                src="/assets/quality_control.webp"
                layout="fill"
                objectFit="cover"
                alt="qualtiy"
              />
            </div>
            <h3>Quality Control</h3>
            <p>
            We adhere to strict quality control standards to ensure that our garments meet our high-quality standards, ensuring that our clients receive high-quality products.
            </p>
          </div>
          <div className={styles["service"]}>
            <div className={styles["img_container"]}>
              <Image
                src="/assets/cloth_manufacturing.webp"
                layout="fill"
                objectFit="cover"
                alt="cloth manufacturing"
              />
            </div>
            <h3>Cloth Manufacturing</h3>
            <p>
            We manufacture high-quality garments efficiently and cost-effectively, ensuring that each garment meets our high standards for quality and durability.
            </p>
          </div>
        </div>
        <div className={styles["features"]}>
          <div />
            <p>Features & Benefits</p>
          <div />
        </div>


        <div className={styles["services_container"]}>
          <div className={styles["service"]}>
            <h3 className={styles["black"]}>Features</h3>
            <ul>
              <li>Personalized Fashion Design</li>
              <li>Seamless Clothing Manufacturing</li>
              <li>Eco-Friendly Processes</li>
              <li>Quality Control</li>
              <li>Innovative Designs</li>
            </ul>
          </div>
          <div className={styles["service"]}>
          <h3 className={styles["black"]}>Features</h3>
            <ul>
              <li>Customized Clothing Solutions</li>
              <li>Environmentally-Friendly Fashion</li>
              <li>Flawless Quality</li>
              <li>Fashionable and Unique Designs</li>
              <li>Exceptional Customer Service</li>
            </ul>
          </div>
          <div className={styles["service"]}>
            <div className={styles["img_container"]}>
            <Image
              src="/assets/lifestyle.webp"
              layout="fill"
              objectFit="cover"
              alt="hero"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
