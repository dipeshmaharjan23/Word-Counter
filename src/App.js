// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState('light')
  
  const[alert , setAlert]=useState(null);
  
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ="rgb(5 37 68)"
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="white"
      
      showAlert("Light mode has been enabled","success");

    }
  }
  return (
    <>
      <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <Alert alert={alert}/>
      <div className="container my-4">
      <TextForm showAlert={showAlert} heading="Enter the text below to analyse" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
