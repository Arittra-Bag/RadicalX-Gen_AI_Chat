import React, { useState } from "react";
import styles from "./inputbar.module.css";
import { IoSend } from "react-icons/io5";
import { useGlobalContext } from "../../../context";
import { callGoogleApi } from "../../../utils/api"; // Correct import

const InputBar = () => {
  const { messageText, setMessageText, handleSubmission } = useGlobalContext();
  const [response, setResponse] = useState("");

  const sendRequest = async () => {
    try {
      // Make an API request to Google AI with the user's messageText
      const apiResponse = await callGoogleApi(messageText);
  
      console.log("API Response:", apiResponse); // Log the API response
  
      // Update the response state with the received response
      setResponse(apiResponse);
    } catch (error) {
      console.error("Error sending API request:", error);
      setResponse("Error Processing this message. Please try again later."); // Set a specific error message
    }
  };

  const handleSubmit = () => {
    // Perform any other necessary actions before sending the API request
    // ...

    // Send the API request
    sendRequest();

    // Perform any other necessary actions after sending the API request
    // ...

    // Proceed with the original handleSubmission logic if needed
    handleSubmission();
  };

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
          <IoSend />
        </div>
      </div>
    </div>
  );
};

export default InputBar;
