import React from "react";
import styles from "./inputbar.module.css";
import { IoSend } from "react-icons/io5";
import { useGlobalContext } from "../../../context";

const InputBar = () => {
  const { messageText, setMessageText, handleSubmission } = useGlobalContext();

  return (
    <div className={styles.footer}>
      <input
        placeholder="Type here..."
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
        onKeyUp={(event) => (event.key === "Enter" ? handleSubmission() : "")}
      />
      <div className={styles.btn} onClick={handleSubmission}>
        <div className={styles.icon}>
          <IoSend/>
        </div>
      </div>
    </div>
  );
};

export default InputBar;