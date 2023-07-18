import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message:'Parent'
        }
       this.greetingMessage = this.greetingMessage.bind(this)
      }
      greetingMessage(childName){
          alert(`hello ${this.state.message} from ${childName}`)
      }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetingMessage}/>
      </div>
    )
  }
}

export default ParentComponent
