import { useEffect, useRef, useState } from "react";
import './CardFlip.css';
import { QRious } from "react-qrious";
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image';
import Moveable from "react-moveable";
import MoveableHelper from "moveable-helper";


const CardFlip = (props) => {
  const [side, showSide] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const frontRef = useRef();
  const backRef = useRef();
  const downloadRef = useRef();
  const headingRef = useRef();
  const subheadingRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const logoImageRef = useRef();

  async function download () {
    if (downloaded) return
    try {
      let frontImg = await domtoimage.toPng(frontRef.current);
      downloadRef.current.href = frontImg;
      downloadRef.current.download = 'cardFrontDesign.jpg';
      downloadRef.current.click();
      setDownloaded(true)
    } catch (error) {
      console.error(error)
    }
  }


  const helper = new MoveableHelper();
  const [isMoveable, setIsMoveable] = useState(false);

  useEffect(() => {
    setIsMoveable(true);
  }, [headingRef, subheadingRef, phoneRef, emailRef, logoImageRef])

  function flip() {
    showSide(!side);
  }
  
  return (
    <div id="card-preview">
     <div id="card-wrapper">
        <div id="card" className={side ? "flip" : ""}>
          <div ref={frontRef} id="front" style={{backgroundColor: props.backColor && props.colorAsBack ? props.backColor : props.frontColor}}>
            <h1 ref={headingRef} style={{color: props.headingColor}}>{props.name ? props.name : 'Your Name'}</h1>
            {((props.requestStatus !== "success") && isMoveable) && <Moveable
                target={headingRef.current}
                hideDefaultLines={true}
                draggable={true}
                throttleDrag={1}
                onDragStart={helper.onDragStart}
                onDrag={helper.onDrag}
                scalable={true}
                throttleScale={0.1}
                keepRatio={true}
                onScale={helper.onScale}
                onScaleStart={helper.onScaleStart}
                origin={false}
                className="hide"
                onClick={(e) => e.moveable.controlBox.classList.toggle('hide')}
            />}

            <i id="designation" ref={subheadingRef} style={{color: props.subheadingColor}}>{props.subHeading ? props.subHeading : 'Designation'}</i>
            {(props.requestStatus !== "success" && isMoveable) && <Moveable
                target={subheadingRef.current}
                hideDefaultLines={true}
                draggable={true}
                throttleDrag={1}
                onDragStart={helper.onDragStart}
                onDrag={helper.onDrag}
                scalable={true}
                throttleScale={0.1}
                keepRatio={true}
                onScale={helper.onScale}
                onScaleStart={helper.onScaleStart}
                origin={false}
                className="hide"
                onClick={(e) => e.moveable.controlBox.classList.toggle('hide')}
            />}
            
            
            <div id="phone" ref={phoneRef}><span className={"material-symbols-outlined"}>call</span><i style={{color: props.phoneColor}}>{props.phone ? props.phone : 'Phone Number'}</i></div>
            {(props.requestStatus !== "success" && isMoveable) && <Moveable
              target={phoneRef.current}
              hideDefaultLines={true}
              draggable={true}
              throttleDrag={1}
              onDragStart={helper.onDragStart}
              onDrag={helper.onDrag}
              scalable={true}
              throttleScale={0.1}
              keepRatio={true}
              onScale={helper.onScale}
              onScaleStart={helper.onScaleStart}           
              origin={false}   
              className="hide"
              onClick={(e) => e.moveable.controlBox.classList.toggle('hide')}
            />}


            <div id="email" ref={emailRef} ><span className={"material-symbols-outlined"}>mail</span><i style={{color: props.emailColor}}>{props.email ? props.email : 'Email'}</i></div>
            {(props.requestStatus !== "success" && isMoveable) && <Moveable
              target={emailRef.current}
              draggable={true}
              throttleDrag={1}
              onDragStart={helper.onDragStart}
              onDrag={helper.onDrag}
              scalable={true}
              throttleScale={0.1}
              keepRatio={true}
              onScale={helper.onScale}
              onScaleStart={helper.onScaleStart}
              hideDefaultLines={true}
              origin={false}
              className="hide"
              onClick={(e) => e.moveable.controlBox.classList.toggle('hide')}
            />}

            <img src={props.logo ? props.logo : "/images/img_placeholder.png"} ref={logoImageRef} alt="no image yet" />
            {(props.requestStatus !== "success" && isMoveable) && <Moveable
              target={logoImageRef.current}
              draggable={true}
              throttleDrag={1}
              onDragStart={helper.onDragStart}
              onDrag={helper.onDrag}
              scalable={true}
              throttleScale={0.1}
              keepRatio={true}
              onScale={helper.onScale}
              onScaleStart={helper.onScaleStart}
              hideDefaultLines={true}
              origin={false}
              className="hide"
              onClick={(e) => e.moveable.controlBox.classList.toggle('hide')}
            />}

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
          <div ref={backRef} id="back" style={{backgroundColor: props.frontColor && props.colorAsFront ? props.frontColor : props.backColor}}>
            <QRious size={120} value={props.URL} style={{border: '2px solid white', borderRadius: '8px'}}/>
          </div>
        </div>
      </div>
      <button disabled={downloaded} id="showBtn" onClick={flip}>
        Show front/Back Side
      </button> 
      {props.requestStatus === "success" && <a ref={downloadRef} id="downloadBtn" onClick={download}>Download</a>} 
    </div>
  )
}

export default CardFlip
