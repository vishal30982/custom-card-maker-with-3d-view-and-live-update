import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";
import sendEmail from "./Email";

const Form = (props) => {
  function sameAsFront(e) {
    e.preventDefault();
    props.setColorAsFront(!props.colorAsFront);
  }
  function sameAsBack(e) {
    e.preventDefault();
    props.setColorAsBack(!props.colorAsBack);
  }

  const [validInp, setValid] = useState();

  async function handleEmail() {
    const dataToMail = {
      name: props.name,
      subheading: props.subHeading,
      headingColor: props.headingColor,
      subheadingColor: props.subheadingColor,
      frontColor: props.frontColor,
      backColor: props.backColor,
      colorAsBack: props.colorAsBack ? "yes" : "no",
      colorAsFront: props.colorAsFront ? "yes" : "no",
      url: props.URL,
    };
    try {
      const emailStatus = await sendEmail(dataToMail);
      props.setStatus("success");
    } catch (error) {
      props.setStatus("fail");
    }
  }

  const submit = (e) => {
    e.preventDefault();

    Array.from(e.target.children).forEach((e) => {
      let input = e.children[1];
      if (input?.type === "text") {
        let nameRegex = /^.{2,}$/;
        if (!nameRegex.test(input.value)) {
          toast.error("please enter a valid name or sub-heading");
          setValid(false);
        } else {
          setValid(true);
        }
      } else if (input?.type === "url") {
        let urlRegex =
          /^(https:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
        if (!urlRegex.test(input.value)) {
          toast.error("please enter a valid URL");
          setValid(false);
        } else {
          setValid(true);
        }
      }
    });

    validInp && handleEmail();
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
          htmlFor="subheading"
          style={{ color: "white" }}
          className="form-label"
        >
          Your Subheading*:
        </label>
        <input
          type="text"
          name="subheading"
          id="subheading"
          onChange={(e) => props.setSubheading(e.target.value)}
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
          Select Name Color*:
        </label>
        <input
          type="color"
          name="headingColor"
          id="headingColor"
          onChange={(e) => props.setHeadingColor(e.target.value)}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="subheadingColor"
          style={{ color: "white" }}
          className="form-label"
        >
          Select Subheading Color*:
        </label>
        <input
          type="color"
          name="subheadingColor"
          id="subheadingColor"
          onChange={(e) => props.setSubheadingColor(e.target.value)}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="color"
          style={{ color: "white" }}
          className="form-label"
        >
          Select Front side Color*:{" "}
        </label>
        <input
          type="color"
          name="frontColor"
          id="frontColor"
          onChange={(e) => props.setFrontColor(e.target.value)}
          className="form-control"
          required
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
          Select Back side Color*:{" "}
        </label>
        <input
          type="color"
          name="backColor"
          id="backColor"
          onChange={(e) => props.setBackColor(e.target.value)}
          className="form-control"
          required
        />
        <button
          onClick={sameAsFront}
          className="py-2 px-1 text-bg-info ms-1 d-inline border rounded-2"
        >
          {props.colorAsFront ? "set custom" : "Same As Front"}
        </button>
      </div>

      <div>
        <label htmlFor="url" style={{ color: "white" }} className="form-label">
          Card URL*:{" "}
        </label>
        <input
          type="url"
          name="url"
          id="Card_URL"
          onChange={(e) => props.setURL(e.target.value)}
          className="form-control"
          required
        />
      </div>

      <button
        className="py-1 px-3 mt-3 rounded-pill fw-bold fs-5 text-uppercase"
        type="submit"
        formNoValidate
      >
        submit
      </button>

      <ToastContainer />
    </form>
  );
};

export default Form;
