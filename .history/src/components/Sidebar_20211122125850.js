import React from "react";
import "./Sisdebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge, Chat, MoreVert } from "@material-ui/icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
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
          <SearchOutlined
      </div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
