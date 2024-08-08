import "./App.css";
import React from "react";
import { useState } from "react";
import Form from "./Form";
import CardFlip from "./CardFlip";

function App() {
  const [name, setName] = useState('');
  const [subHeading, setSubheading] = useState('');
  const [frontColor, setFrontColor] = useState('');
  const [backColor, setBackColor] = useState('');
  const [headingColor, setHeadingColor] = useState('');
  const [subheadingColor, setSubheadingColor] = useState('');
  const [colorAsFront, setColorAsFront] = useState(false);
  const [colorAsBack, setColorAsBack] = useState(false);
  const [URL, setURL] = useState('');
  const props = [
    {
      setName: setName, 
      setSubheading: setSubheading,
      setFrontColor: setFrontColor,
      setBackColor: setBackColor,
      setHeadingColor: setHeadingColor,
      setSubheadingColor: setSubheadingColor,
      setURL: setURL,
      setColorAsFront: setColorAsFront,
      setColorAsBack: setColorAsBack,
      colorAsFront: colorAsFront,
      colorAsBack: colorAsBack
    },
    {
      name: name, 
      subHeading: subHeading,
      frontColor: frontColor,
      backColor: backColor,
      headingColor: headingColor,
      subheadingColor: subheadingColor, 
      URL: URL, 
      colorAsFront: colorAsFront,
      colorAsBack: colorAsBack
    }
  ]
  return (
    <>
      <Form {...props[0]} />
      <br />
      <CardFlip {...props[1]} />
    </>
  );
}

export default App;
