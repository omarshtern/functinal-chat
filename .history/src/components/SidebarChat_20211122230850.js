import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../utils/firebase";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

export default function SidebarChat({ addNewChat, roomId, name }) {
  const [seed, setSeed] = useState("");
  const  [messages, setMessages] = useState('')
  const createChat = () => {
    const roomName = prompt("Please enter e roomname");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };


  useEffect(() => {
    if(roomId) {
      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'desc')
    }
  }, [])


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <Link
      style={{  textDecoration: "none" }}
      to={`/rooms/${roomId}`}
    >
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}
