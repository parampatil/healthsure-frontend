import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const Chat = () => {
  // const [state, setState] = useState({
  //     filledForm: false,
  //     messages: [],
  //     value: '',
  //     name: '',
  //     room: 'test',
  //   })

  const [filledForm, setFilledForm] = useState(false);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("test");

  const client = new W3CWebSocket("ws://127.0.0.1:8000/ws/" + room + "/"); //gets room_name from the state and connects to the backend server

  const onButtonClicked = (e) => {
    e.preventDefault();
    client.send(
      JSON.stringify({
        type: "message",
        text: value,
        sender: name,
      })
    );
    setValue("");
  };

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      if (dataFromServer) {
        setMessages([
          ...messages,
          {
            msg: dataFromServer.text,
            name: dataFromServer.sender,
          },
        ]);
      }
    };
  }, []);
  return (
    <div className="container mt-5">
      {filledForm ? (
        <div className="mt-3">
          <h4>Room Name: {room}</h4>
          <div
            className="mt-3 p-3"
            style={{ maxHeight: 500, overflow: "auto", boxShadow: "none" }}
          >
            {messages.map((message, index) => (
              <div key={index} className="card mb-3">
                <div className="card-header">{message.name}</div>
                <div className="card-body">{message.msg}</div>
              </div>
            ))}
          </div>
          <form className="mt-3" onSubmit={onButtonClicked} noValidate>
            <div className="mb-3">
              <label htmlFor="message-input" className="form-label">
                Write text
              </label>
              <input
                type="text"
                className="form-control"
                id="message-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Send Message
            </button>
          </form>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <form className="p-5" onSubmit={() => setFilledForm(true)} noValidate >
            <div className="mb-3">
              <label htmlFor="room-input" className="form-label">
                Room name
              </label>
              <input
                type="text"
                className="form-control"
                id="room-input"
                autoFocus
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name-input" className="form-label">
                Sender
              </label>
              <input
                type="text"
                className="form-control"
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
