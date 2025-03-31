import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [selectedMode, setSelectedMode] = useState(null);

  
  const handleModeChange = (mode) => {
    if (selectedMode === mode) {
      setSelectedMode(null); // Uncheck if clicked again
      props.toggleMode("light"); // Reset to default light mode
    } else {
      setSelectedMode(mode);
      if (mode === "dark") {
        props.toggleMode("dark"); // Activate dark mode
      } else if (mode === "green") {
        props.GreenyMode(); // Activate green mode
      }
    }
  };

  return (
    <div>
        <nav className={`navbar navbar-expand-lg ${props.mode === "dark"? "navbar-dark bg-dark": props.mode === "green"? "navbar-dark bg-success" : "navbar-light bg-light"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>

           
          </div>

          {/* Dark Mode Checkbox */}
          <div className={`mx-3 form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              checked={selectedMode === "dark"} 
              onChange={() => handleModeChange("dark")} 
              disabled={selectedMode === "green"} // Disable when Green Mode is selected
              id="darkMode" 
            />
            <label className="form-check-label" htmlFor="darkMode">
              Dark Mode
            </label>
          </div>

          {/* Green Mode Checkbox */}
          <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              checked={selectedMode === "green"} 
              onChange={() => handleModeChange("green")} 
              disabled={selectedMode === "dark"} // Disable when Dark Mode is selected
              id="greenMode"
            />
            <label className="form-check-label" htmlFor="GreenyMode">
              Green Mode
            </label>
          </div>

        </div>
      </nav>
    </div>
  );
}
