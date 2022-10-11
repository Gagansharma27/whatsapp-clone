import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Chat.css";
export default function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerinfo">
          <h3>Room name</h3>
          <p> last seen at....</p>
        </div>
        <div className="headerright">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Gagan</span>
          this is message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_receiver">
          <span className="chat_name">Gagan</span>
          this is message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Gagan</span>
          this is message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>


      <div className="chat_footer">
        <InsertEmoticon/>
        <form>
        <input type="text" placeholder="Send a message" />
        <button type ="submit"> Send message</button>

        </form>
        <Mic/>
      </div>
    </div>
  );
}
