import React from "react";
import "./Button.css";

export default function Button(props) {
  function triggerAudio(sample) {
    console.log("Hello " + sample);
  }
  return (
    <button
      onClick={() => {
        triggerAudio(props.sample);
      }}
      className={`${props.className} button`}
    >
      {props.title}
    </button>
  );
}
