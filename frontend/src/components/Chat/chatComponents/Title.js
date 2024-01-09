import React from "react";
import styles from "./title.module.css";
import chatbot from "./robot.png";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={chatbot} alt="AI" />
          </div>
          <p>RelX</p>
        </div>
      </div>
    </div>
  );
};

export default Title;