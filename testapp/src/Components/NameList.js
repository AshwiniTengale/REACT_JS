import React from 'react'
import Childname from './Childname'


function NameList() {

    const names=['ashwini','jaani','jaani']
   const namelist= names.map((names,index) => <h1 key={index}>{index}{names}</h1>)

const persons=[
      {
        id:1,
        name:'ashwini',
        skill:'Web',
        age:22
        },
        {
            id:2,
            name:'Jaani',
            skill:'VLSI',
            age:21
        }
]

// const namelist= names.map(name =><h1>{name}</h1>)

  return (
    <div>
       {namelist}
    </div>
  )
}

export default NameList
