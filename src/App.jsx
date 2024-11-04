import "./App.css";
import React from "react";
import { useState } from "react";
import Form from "./Form";
import CardFlip from "./CardFlip";
import Result from "./Result";

function App() {
  const [name, setName] = useState('');
  const [subHeading, setSubheading] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneColor, setPhoneColor] = useState('');
  const [email, setEmail] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [frontColor, setFrontColor] = useState('');
  const [backColor, setBackColor] = useState('');
  const [headingColor, setHeadingColor] = useState('');
  const [subheadingColor, setSubheadingColor] = useState('');
  const [colorAsFront, setColorAsFront] = useState(false);
  const [colorAsBack, setColorAsBack] = useState(false);
  const [URL, setURL] = useState('');
  const [logo, setLogo] = useState('');
  const [requestStatus, setStatus] = useState();
  const [snapShot, setSnapShot] = useState();
  const [submitted, setSubmitted] = useState(false);
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
      setPhone,
      setEmail,
      setPhoneColor,
      setEmailColor,
      colorAsFront,
      colorAsBack,
      name,
      subHeading,
      frontColor,
      backColor,
      headingColor,
      subheadingColor,
      URL,
      phone,
      email,
      phoneColor,
      emailColor,
      logo,
      setLogo,
      setSubmitted,
      snapShot,
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
      requestStatus,
      phone,
      email,
      phoneColor,
      emailColor,
      logo,
      snapShot,
      setSnapShot,
      submitted
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
