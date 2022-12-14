import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Chat.css";
import axios from "./axios";

export default function Chat({ messages }) {
  const [input,setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

  await  axios.post("/messages/new",{
      message : input,
      name : "Demo",
      timestamp : "Just now",
      received : false
    })

    setInput('');
  }

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
        {messages.map((message) => (
          <p className= {`chat_message ${message.received && "chat_receiver"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}

        {/* <p className="chat_message chat_receiver">
          <span className="chat_name">Gagan</span>
          this is message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Gagan</span>
          this is message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p> */}
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
          <button onClick={sendMessage} type="submit">Send message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
