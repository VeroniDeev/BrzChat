"use client";
import { useEffect } from "react";
import { io } from "socket.io-client";

const Salut = () => {
  const socket = io("127.0.0.1:8000");
  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id);
    });
    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
    });
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          socket.emit("salutation");
          console.log("jai cliquer");
        }}
      >
        Clique
      </button>
    </>
  );
};

export default Salut;
