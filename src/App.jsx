import { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import { useState } from "react";

function App() {

  const [messages,setMessages] = useState([]);


  useEffect(() => {
    axios.get("/messages/sync").then(response => {
      setMessages(response.data)
    });
  },[]);

  useEffect(() => {
    const pusher = new Pusher("99cbbf3943ef0c43cb74", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }


  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages = {messages} />
      </div>
    </div>
  );
}

export default App;
