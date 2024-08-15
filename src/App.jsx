import "./App.css";
import React from "react";
import { useState } from "react";
import Form from "./Form";
import CardFlip from "./CardFlip";
import Result from "./Result";

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
  const [requestStatus, setStatus] = useState();
  const props = [
    {
      setName, 
      setSubheading,
      setFrontColor,
      setBackColor,
      setHeadingColor,
      setSubheadingColor,
      setURL,
      setColorAsFront,
      setColorAsBack,
      setStatus,
      colorAsFront,
      colorAsBack,
      name,
      subHeading,
      frontColor,
      backColor,
      headingColor,
      subheadingColor,
      URL
    },
    {
      name, 
      subHeading,
      frontColor,
      backColor,
      headingColor,
      subheadingColor, 
      URL, 
      colorAsFront,
      colorAsBack,
    }
  ]
  return (
    <>
      {requestStatus ? <Result result={requestStatus} /> : <Form {...props[0]} />}
      <br />
      <CardFlip {...props[1]} />
    </>
  );
}

export default App;
