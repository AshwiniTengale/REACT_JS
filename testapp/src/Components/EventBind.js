import React, { Component } from 'react'

 

class EventBind extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message:'Hello'
           
        }
       this.clickHandler=this.clickHandler.bind(this)
      }
      clickHandler(){
        this.setState ({
    message:'Goodbye'
        })
      }
    // clickHandler=() => {
    //     this.setState({
    //       message:'Goodbye'
    //     })
    // }//4th approach
  render() {

    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> 1st approach */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> 2nd approach  */}
        <button onClick={this.clickHandler}>Click</button> {/*best approach */}
        {/* <button onClick={this.clickHandler}>Click</button> 4th approach */}
      </div>
    )
  }
}

export default EventBind
