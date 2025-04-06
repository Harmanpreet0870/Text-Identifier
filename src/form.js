
import React, { useState } from 'react'

export default function Form(props) {
  
  const handleUpClick = () => {
    console.log("clicked"+pass);
    let newpasst = pass.toUpperCase();
    newpass(newpasst)
    props.showalert("Converted to Upper case", "success");
    if(pass.length===0){
      props.showalert("PLEASE ENTER SOMETHING FIRST","warning")
    }
  }
  const handleloClick = () => {
    console.log("clicked"+pass);
    let newpasst = pass.toLowerCase();
    newpass(newpasst)
    props.showalert("Converted to Lower case","success");
    if(pass.length===0){
      props.showalert("PLEASE ENTER SOMETHING FIRST","warning")
    }
    
  }
  
  const handleVoClick = () => {
    if (pass.length === 0) {
      props.showalert("PLEASE ENTER SOMETHING FIRST", "warning");
      return; // Exit the function if the input is empty
    }
     console.log("clicked"+pass);
     let i;
     for( let i=0;i<pass.length;i++)
      console.log(pass[i])
     let match=pass.match(/[aeiouAEIOU]/g);
      console.log("NICEE");
      if(match){
       setmat(match.length)}
      
      
      else{
        setmat(0)
        props.showalert("No Vowels Found","danger")
        return; 
      }
      

      console.log(mat);
      props.showalert("Vowerls were Found","success");
  }
  const handdleonChange = (event) => {
    console.log("changed");
    newpass(event.target.value)

  }
  
  const [pass,newpass] = useState("");
  const[mat,setmat]=useState("0");
  return (
    <>
     
  <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <form>
    
    <label htmlFor="myBox" className="form-label">{props.title} </label>
    <input  className="form-control row-3" value={pass} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="exampleInputPassword1" onChange={handdleonChange}  />
  
 
  
</form>
<button  className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Upper Case</button>
<button  className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lower Case</button>
<button  className="btn btn-primary mx-2" onClick={handleVoClick}>Identify Vowels</button>
    </div>

  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>YOUR TEXT SUMMARY</h1>
  
    <p>Total words {pass.split(" ").filter((element)=>{return element.length!==0}).length} and {pass.length} characters and vowels present are {mat} </p>
    <h2>Preview</h2>
    <p>{pass.length>0?pass:"Enter Something to preview"}</p>
    
  </div>
    </>  
  )
  
}
