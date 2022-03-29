import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newTeext = text.toUpperCase();
    setText(newTeext);
    props.showAlert('Converted to Uppercase','success')
  };
  const handleDownClick = () => {
    let newTeextt = text.toLowerCase();
    setText(newTeextt);
    props.showAlert('Converted to LowerCase','success')

  };
  const ClearText = () => {
    let newTeextt = "";
    setText(newTeextt);
    props.showAlert('Clear the text','success')

  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied the text','success')

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "))
    props.showAlert('Removed the extra space','success')

  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 >{props.heading}</h1>
        <div className="mb-3 ">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black ' }} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>
      <div className="container" my-3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words {text.length} charaters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter text above to preview it"}</p>
      </div>

    </>
  );
}
