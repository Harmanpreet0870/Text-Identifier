
import './App.css';
import Navbar from './navbar';


import Form from './form';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[mode,setMOde]=useState('light');
  const[alert,setalert]=useState(null);
  const[Greeny,setGreeny]=useState('success');


  const showalert=(message,type)=>{
       setalert({
        msg:message,
        typ: type
       })
       setTimeout(() => {
        setalert(null);
       }, 1000);
  }
  const toggleMode=()=>{
    if(mode==='light')  {
    setMOde('dark');
    document.body.style.backgroundColor='#04395E';
    showalert("Dark Mode Enable","success")
  }
    else{
      setMOde('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode Enable","success")
    }
  }
  const GreenyMode=()=>{
    if(mode==='light'){
      setMOde('green')
      document.body.style.backgroundColor="#04A777";
      
      
      showalert("Green Mode Enable","success")
    }
   if(mode==='green'){
    setMOde('light')
    document.body.style.backgroundColor='white';
    showalert("Light Mode Enable","success")
   }
  }
 

   return (
    <>  
  
 <Router>  
<Navbar mode={mode} toggleMode={toggleMode} GreenyMode={GreenyMode} />
<Alert alert= {alert}/>
<div className="container my-3">
<Routes>
<Route exact path="/about" element={<About />} />
         
         
        
<Route exact path="/" element={<Form title="Enter Your Text:" showalert={showalert} mode={mode} />} />
            
        
</Routes>


</div>
</Router> 
</>
    
);
  
}

export default App;
