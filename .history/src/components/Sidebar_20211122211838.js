import React, { useEffect, useState } from "react";
import "./Sisdebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "../utils/firebase";
import { useSelector } from "react-redux";
function Sidebar() {
  const [rooms, setRooms] = useState([]);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const uns = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      uns();
    };
  }, []);

  console.log(rooms);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <p>{user?.displayName}</p>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="search" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat="Add new chat" />
        {rooms.map((r) => (
          <SidebarChat key={r.id} id={r.id} name={r.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
