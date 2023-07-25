import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         lastname:'',
         topic:'Jimin',
      }
    }
    handleusername = event =>{
        this.setState({
            username:event.target.value
        })
    }
    handlelastname =event =>{
        this.setState({
            lastname:event.target.value
        })
    }
    handletopic = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    submitform = event =>{
        
     alert(`${this.state.username} ${this.state.lastname} ${this.state.topic}`)
    event.preventDefault()
       
    }


    render() {
    return (
      <div>
        <form onSubmit={this.submitform}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleusername}></input>
            </div>
            <div>
                <label>Last name</label>
                <input type='text' value={this.state.lastname} onChange={this.handlelastname}></input>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handletopic}>
                    <option value="Jimin" >Jimin</option>
                    <option value="V">V</option>
                    <option value="Jungkook" >Jungkook</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>

      </div>
    )
  }
}

export default Form
