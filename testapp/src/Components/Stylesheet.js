import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let a = props.primary ? 'primary':''
  return (
   
    <div>
        <h1 className={`${a} font`}>STYLESHEET</h1>{/*For multiple classes   */} 
      
    </div>
  )
}

export default Stylesheet
