import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('Ashwini')}>Click here</button>
    </div>
  )
}

export default ChildComponent
