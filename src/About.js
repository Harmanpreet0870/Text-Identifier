import React, { useState } from 'react'

export default function About() {
  const [myStyle,setMyStyle]=useState( {
    color:'white',
    backgroundColor:'black',
    color:'white'
  })
  const[btntext,setbtnText]=useState("Enable Light Mode")
 const toggleStyle=()=>{
    if(myStyle.color ==='white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setbtnText("Enable Dark Mode")
  }
    else{
    setMyStyle({
      color:'white',
      backgroundColor:'black',
      border:'2px solid black' 
    })
    setbtnText("Enable Light Mode")
  }
}
  return (
    <div>
      <div className='container' style={myStyle}>
          <h1>ABOUT US</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
        <div className="accordion-body" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem eligendi hic recusandae dicta debitis voluptates dolore molestiae velit et, facere dolor sit tenetur. Aspernatur hic porro exercitationem nemo dolores tempore, consequuntur, beatae earum rerum explicabo dolor deleniti iusto vitae?
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
        </div>
       
        
    </div>
  )
}
