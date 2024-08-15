import { useState } from "react";
import './CardFlip.css';
import { QRious } from "react-qrious";

const CardFlip = (props) => {
  const [side, showSide] = useState(false);
  
  function flip() {
    showSide(!side);
  }

  return (
    <>
     <div id="card-wrapper">
        <div id="card" className={side ? "flip" : ""}>
          <div id="front" style={{backgroundColor: props.backColor && props.colorAsBack ? props.backColor : props.frontColor}}>
            <h1 style={{color: props.headingColor}}>{props.name ? props.name : 'Your Name'}</h1>
            <i style={{color: props.subheadingColor}}>{props.subHeading ? props.subHeading : 'SubHeading Text'}</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 8L10 16"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18.7224 20.5C20.2145 17.9157 21 14.9841 21 12C21 9.01588 20.2145 6.08433 18.7224 3.5"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14.3923 18C15.4455 16.1758 16 14.1064 16 12C16 9.89356 15.4455 7.82423 14.3923 6"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9.9282 16C10.6303 14.7838 11 13.4043 11 12C11 10.5957 10.6303 9.21615 9.9282 8"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M5.0718 16C4.36965 14.7838 4 13.4043 4 12C4 10.5957 4.36965 9.21615 5.0718 8"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div id="back" style={{backgroundColor: props.frontColor && props.colorAsFront ? props.frontColor : props.backColor}}>
            <QRious size={120} value={props.URL} style={{border: '10px solid white', borderRadius: '10px'}}/>
            <span>powered by tapvCard</span>
          </div>
        </div>
      </div>
      <button id="showBtn" onClick={flip}>
        Show front/Back Side
      </button> 
    </>
  )
}

export default CardFlip
