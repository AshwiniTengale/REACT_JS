import React, { Component } from 'react'

 class LifeCyscleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ashwini'

      }
      console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA  getDerivedStateFromProps')
        return null

    }
   componentDidMount(){
    console.log('LifeCycleA componentDidMount')
   
   }
    
  render() {
    console.log('LifeCycleA render')

    return (
      <div>
        LifeCycleA
      </div>
    )
  }
}

export default LifeCyscleA
