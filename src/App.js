import './App.css';
import React, { useState} from 'react'
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './Components/Logo.jpg';

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const showalert = (state,message) => 
  {
    setAlert(
    {
      message:message,
      state:state
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  
  const EnableMode = () => 
  {
    if (mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(60 65 62)"
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = "#e3eceb"
    }
  }
return (
    <>
      <Router>
        <Navbar title = "TextWiz" aboutText = "About" func = {EnableMode} mode = {mode}/>
        <Alert alert = {alert}/>
        <Routes>
          <Route path="/about" element = {<About mode={mode}/>}/>
          <Route exact path="/" element={<Textform heading = "Type or Paste your code here." placeholder = "Type or paste here..." mode = {mode} showalert = {showalert}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
