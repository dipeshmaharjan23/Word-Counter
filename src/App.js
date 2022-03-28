// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode,setMode] = useState('light')

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ="rgb(5 37 68)"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="white"
    }
  }
  return (
    <>
      <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <div className="container ">
      <TextForm heading="Enter the text below to analyse" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
