import { useState, useEffect } from "react";
import WebSocket from "isomorphic-ws";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);
  const [newChat, setNewChat] = useState("");
  const [chat, setChat] = useState("");

  const [ws, setWs] = useState(null);

  useEffect(() => {
    console.log("try to connect...");
    setWs(new WebSocket("ws://192.168.221.100:8080/ws/chat"));
  }, []);

  function refreshChat(newChat) {
    setChat(chat + "\n" + newChat);
  }

  useEffect(() => {
    if (!newChat) return;
    refreshChat(newChat);
  }, [newChat]);

  useEffect(() => {
    if (!ws) return;
    ws.onopen = () => {
      console.log("connected successfully!!");
    };

    ws.onmessage = (event) => {
      setNewChat(event.data);
    };
  }, [ws]);

  function sendMessage() {
    ws.send(message);
    setMessage("");
  }

  return (
    <div className="container">
      <textarea value={chat} readOnly={true} />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
      >
        <input
          value={message}
          onChange={(val) => {
            setMessage(val.target.value);
          }}
        />
        <input type="submit"></input>
      </form>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        textarea {
          width: 200px;
          height: 500px;
        }
      `}</style>
    </div>
  );
}
