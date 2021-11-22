import React from "react";
import "./Sisdebar.css";
import { Avatar } from "@material-ui/core";
import { DonutLarge, Chat, Morevert } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className='sidebar__headerRight'>
            <DonutLarge />
            <Chat />
            <Morevert />
        </div>
      </div>
      <div className="sidebar__search"></div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
