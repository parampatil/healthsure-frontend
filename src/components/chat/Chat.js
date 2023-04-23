import React, { useEffect } from "react";
import { useSelector } from "react-redux"
import { CometChat } from "@cometchat-pro/chat";

import { CometChatUI } from "./CometChatWorkspace/src";


const Chat = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  
  let authKey = "302eec9f01c257c0ba47213987efbb2e76978ed6";
  let uid = currentUser.email.split("@")[0];

  useEffect(() => {
    var user = new CometChat.User(uid);
    user.setName(currentUser.displayName);
    CometChat.createUser(user, authKey).then(
      (user) => {
        console.log("user created", user);
      },
      (error) => {
        console.log("error", error);
      }
    );

    CometChat.login(uid, authKey).then(
        user => {
          console.log("Login Successful:", { user });    
        },
        error => {
          console.log("Login failed with exception:", { error });    
        }
      );
  }, []);

  return <div className="container-fluid flex-fill p-0">
    <CometChatUI />
  </div>;
};

export default Chat;
