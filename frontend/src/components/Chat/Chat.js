import React, { useEffect, useState } from "react";
import styles from "./chat.module.css";

import Title from "./chatComponents/Title";
import InputBar from "./chatComponents/InputBar";
import Body from "./chatComponents/Body";

import { auth } from "../Authentication/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Chat = (props) => {
  const [userName, setUserName] = useState("");
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        alert("Sign out Successfully!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={`${styles.header} ${styles.item}`}>
              <h2 className={styles.greet}>Hey, {userName === "" ? "User" : `${props.name}`} </h2>
              <Link
                to="/login"
                activeClassName={styles.active}
                className={styles.link}
                onClick={signOutHandler}
              >
                {userName === "" ? "Sign In" : "Sign Out"}
              </Link>
            </div>
            <Title />
            <Body />
            <InputBar />
          </div>
        </div>
    </>
  );
};

export default Chat;