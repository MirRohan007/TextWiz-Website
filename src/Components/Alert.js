import React from 'react'


export default function Alert(props) {
  const upper = (word) => 
  {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); 
  }
  return (
    <div style={{height:'40px'}}>
      {props.alert && <div className={`alert alert-${props.alert.state} alert-dismissible fade show`} role="alert">
        <strong>{upper(props.alert.state)}</strong>: {props.alert.message}!
      </div>}
    </div>
  )
}
