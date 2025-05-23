import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "./form.css";
import sendEmail from "./Email";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { HexColorPicker } from "react-colorful";

const Form = (props) => {
  function sameAsFront(e) {
    e.preventDefault();
    props.setColorAsFront(!props.colorAsFront);
  }
  function sameAsBack(e) {
    e.preventDefault();
    props.setColorAsBack(!props.colorAsBack);
  }

  async function uploadLogo(e) {
    let file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      try {
        const fileUpload = await fetch(process.env.UPLOAD_URL, {
          method: 'POST',
          body: formData
        })
        const data = await fileUpload.json()
        console.log(data)
        if(!data.Ok) {
          throw data.error
        }
        props.setLogo(data.url)
      }
      catch (err) {
        toast.error(`Upload failed: ${err || 'Unknown error'}`);
      }
    }
  }

  const [validInp, setValid] = useState(false);
  const phoneNumberRef = useRef();
  const submitBtnRef = useRef();

  async function handleEmail() {
    const dataToMail = {
      name: props.name,
      subheading: props.subHeading,
      phone: props.phone,
      email: props.email,
      headingColor: props.headingColor,
      subheadingColor: props.subheadingColor,
      phoneColor: props.phoneColor,
      emailColor: props.emailColor,
      frontColor: props.frontColor,
      backColor: props.backColor,
      colorAsBack: props.colorAsBack ? "yes" : "no",
      colorAsFront: props.colorAsFront ? "yes" : "no",
      url: props.URL,
      logo: props.logo,
      snapShot: props.snapShot,
    };
    try {
      const emailStatus = await sendEmail(dataToMail);
      props.setStatus("success");
    } catch (error) {
      props.setStatus("fail");
    }
  }

  useEffect(() => {
    if (props.snapShot && validInp) {
      handleEmail();
    }
  }, [props.snapShot]);

  const submit = (e) => {
    e.preventDefault();

    Array.from(e.target.children).forEach((e) => {
      let input = e.children[1];
      if (input?.type === "text") {
        if (input.value) {
          let nameRegex = /^.{2,}$/;
          if (!nameRegex.test(input.value)) {
            toast.error("please enter a valid name or designation");
            setValid(false);
          } else {
            setValid(true);
          }
        }
      } else if (input?.type === "url") {
        if (input.value) {
          let urlRegex =
            /^(https:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
          if (!urlRegex.test(input.value)) {
            toast.error("please enter a valid URL");
            setValid(false);
          } else {
            setValid(true);
          }
        }
      }
    });

    if (validInp === true) {
      props.setSubmitted(true);
      toast.success("submitting... please wait!");
    } else {
      toast.error("something went wrong! try again.");
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="name" style={{ color: "white" }} className="form-label">
          Your Name*:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => props.setName(e.target.value)}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="headingColor"
          style={{ color: "white" }}
          className="form-label"
        >
          Select Name Color:
        </label>
        <HexColorPicker
          color={props.headingColor}
          onChange={props.setHeadingColor}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="subheading"
          style={{ color: "white" }}
          className="form-label"
        >
          Designation:
        </label>
        <input
          type="text"
          name="subheading"
          id="subheading"
          onChange={(e) => props.setSubheading(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="subheadingColor"
          style={{ color: "white" }}
          className="form-label"
        >
          Select designation Color:
        </label>
        <HexColorPicker
          color={props.subheadingColor}
          onChange={props.setSubheadingColor}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="phone"
          style={{ color: "white" }}
          className="form-label"
        >
          Phone Number:
        </label>
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="IN"
          ref={phoneNumberRef}
          placeholder={"enter your phone number here..."}
          onChange={(value) => props.setPhone(value)}
          // error={props.phone && isPossiblePhoneNumber(props.phone) ? 'true' : toast.error("please enter a valid phone number")}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="phoneColor"
          style={{ color: "white" }}
          className="form-label"
        >
          Select Ph. No. Color:
        </label>
        <HexColorPicker
          color={props.phoneColor}
          onChange={props.setPhoneColor}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="email"
          style={{ color: "white" }}
          className="form-label"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => props.setEmail(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="emailColor"
          style={{ color: "white" }}
          className="form-label"
        >
          Select Email Color:
        </label>
        <HexColorPicker
          color={props.emailColor}
          onChange={props.setEmailColor}
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="frontSidecolor"
          style={{ color: "white" }}
          className="form-label"
        >
          Select Front side Color:{" "}
        </label>
        <HexColorPicker
          color={props.frontColor}
          onChange={props.setFrontColor}
        />
        <button
          onClick={sameAsBack}
          className="py-2 px-1 text-bg-info ms-1 d-inline border rounded-2"
        >
          {props.colorAsBack ? "set custom" : "Same As Back"}
        </button>
      </div>

      <div className="mb-3">
        <label
          htmlFor="color"
          style={{ color: "white" }}
          className="form-label"
        >
          Select Back side Color:{" "}
        </label>
        <HexColorPicker color={props.backColor} onChange={props.setBackColor} />
        <button
          onClick={sameAsFront}
          className="py-2 px-1 text-bg-info ms-1 d-inline border rounded-2"
        >
          {props.colorAsFront ? "set custom" : "Same As Front"}
        </button>
      </div>

      <div className="mb-3">
        <label
          htmlFor="color"
          style={{ color: "white" }}
          className="form-label"
        >
          Choose Logo:{" "}
        </label>
        <input
          type="file"
          name="logoInput"
          id="logoInput"
          onChange={uploadLogo}
          accept="image/*"
        />
      </div>

      <div>
        <label htmlFor="url" style={{ color: "white" }} className="form-label">
          Card URL:{" "}
        </label>
        <input
          type="url"
          name="url"
          id="Card_URL"
          onChange={(e) => props.setURL(e.target.value)}
          className="form-control"
          formNoValidate
        />
      </div>

      <button
        className="py-1 px-3 mt-3 rounded-pill fw-bold fs-5 text-uppercase "
        type="submit"
        ref={submitBtnRef}
      >
        submit
      </button>
    </form>
  );
};

export default Form;
