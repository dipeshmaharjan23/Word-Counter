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
    document.getSelection().removeAllRanges();

  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "))
    props.showAlert('Removed the extra space','success')

  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3 ">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(13 52 90)' : 'white', color: props.mode === 'dark' ? 'white' : 'black ' }} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ClearText}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>
      <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 >Your text summary</h2> 
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} charaters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter text above to preview it"}</p>
      </div>

    </>
  );
}
