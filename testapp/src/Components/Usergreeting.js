import React, { Component } from 'react'

 class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
   



  render() {
    return this.state.isLoggedIn && (<div>Welcome Ashwini</div>)//shortcut method


    // return(
    // this.state.isLoggedIn?(<div>Welcome Ashwini</div>):(<div>Welcome Guest</div>)//ternary method
    // )


    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Ashwini</div>
    // } else{
    //     message=<div>Welcome Guest</div>
    // }
    // return (<div>{message}</div>)



    // if(this.state.isLoggedIn){
    //     return(<div>Welcome Ashwini</div>)

    // }
    // else{
    //     return(<div>Welcome Guest</div>)
    // }
    return (
      <div>
        
      </div>
    )
  }
}

export default Usergreeting
