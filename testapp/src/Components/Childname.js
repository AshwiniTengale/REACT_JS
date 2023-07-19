import React from 'react'

function Childname({person}) {
  return (
    <div>
      <h1> 
        I am {person.name} and I am {person.age} yeras old and i know {person.skill}
        </h1>
    </div>
  )
}

export default Childname
