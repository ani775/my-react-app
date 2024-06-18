import logo from './logo.svg';
import './App.css';
import Navbar from './comoonents/Navbar';
import TextForm from './comoonents/TextForm';
import About from './comoonents/About';
import React, { useState } from 'react';
import Alert from './comoonents/Alert';
import {
  BrowserRouter as Router,
  Routes, // Updated import
  Route,  // Updated import
  Link
} from "react-router-dom";

let name = "harry";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (Message, type) => {
    setalert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "dark";
      showalert("dark mode enabled", "Success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode enabled", "Success");
    }
  }
  return (

    <>
      <Router>
        <div className='blank'>
          <p>hi {name}</p>
        </div>

        <Navbar title="textutils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Routes> {/* Updated from Switch to Routes */}
          <Route path="/about" element={<About />} /> {/* Updated route syntax */}
          <Route path="/" element={<TextForm heading="textarea" mode={mode} showalert={showalert} />} /> {/* Updated route syntax */}
        </Routes>

        {/* <About /> */}
      </Router>
    </>

  );
}

export default App;
