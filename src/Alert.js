import React from 'react'

export default function Alert(props) {
  const cap=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }


  return (
    <div style={{height:'50px'}}>
    {props.alert&&<div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
  <strong> {cap(props.alert.typ)}</strong>:{props.alert.msg}
 
</div>}
</div>
  )
}

