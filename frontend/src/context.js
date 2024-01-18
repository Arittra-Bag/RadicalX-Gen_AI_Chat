import React, { createContext, useContext, useRef, useState } from "react";
import { callGoogleApi } from "./utils/api";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const lastMsg = useRef();
    const [messageText, setMessageText] = useState("");
    const [messages, setMessages] = useState([
      {
        from: "ai",
        text: "Hi there! how may I help you...",
      },
    ]);
    const [processing, setProcessing] = useState(false);
  

    const handleSubmission = async () => {
        if (!messageText.trim() || processing) return;
    
        const tempMessages = [
          ...messages,
          {
            from: "human",
            text: messageText,
          },
        ];

        setMessages(tempMessages);
        setMessageText("");
    
        setTimeout(() => {
          const lastMessage = lastMsg.current;
    
          if (lastMessage && lastMessage.scrollIntoView) {
            lastMessage.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 10);
      

        try {
            setProcessing(true);
      
            // Make an API request to Google AI with the user's messageText
            const ans = await callGoogleApi(messageText);
      
            setProcessing(false);
      
            setMessages((prev) => [
              ...prev,
              {
                from: "ai",
                text: ans,
              },
            ]);
          } catch (err) {
            const error = "Error Processing this message. Please try again later.";
            setMessages((prev) => [
              ...prev,
              {
                from: "ai",
                text: error,
              },
            ]);
          }

    setTimeout(() => {
        const lastMessage = lastMsg.current;
      
        // Check if lastMessage is not null or undefined
        if (lastMessage && lastMessage.scrollIntoView) {
          lastMessage.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 10); // Adjust the delay (in milliseconds) as needed
      
  };

  return (
    <AppContext.Provider
      value={{
        lastMsg,
        messageText,
        setMessageText,
        processing,
        setProcessing,
        messages,
        setMessages,
        handleSubmission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};