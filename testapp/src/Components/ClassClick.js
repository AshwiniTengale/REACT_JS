import React, { Component } from 'react'

export class ClassClick extends Component {
classHandler(){
    console.log("button clicked")
}
  render() {
    return (
      <div>
        <button onClick={this.classHandler}>Click ME</button>
      </div>
    )
  }
}

export default ClassClick
