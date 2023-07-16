import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Button.css";

export default function Button(props) {
  const [color, setColor] = useState("black");

  function play(sample) {
    new Audio(sample).play();
    console.log("Hello " + sample);
  }

  const click = (color) => {
    setColor(color);
    setTimeout(reset, 100);
  };

  const reset = (color) => {
    setColor("black");
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <motion.button
      // whileTap={{ scale: 0.95 }}
      // transition={{ duration: 0.1 }}
      onClick={() => {
        play(props.sample);
        click(props.color);
      }}
      className={`${props.className} button`}
    >
      {props.title}
    </motion.button>
  );
}
