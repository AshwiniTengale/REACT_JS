import React from 'react'
import Childname from './Childname'


function NameList() {

//     const names=['ashwini','jaani']
//    const namelist= names.map(names => <h1>{names}</h1>)

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

const personlist= persons.map(person =>( <Childname person={person}></Childname>))

  return (
    <div>
       {personlist}
    </div>
  )
}

export default NameList
