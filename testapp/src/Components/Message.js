import React,{Component} from "react";
class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'Hii Visitor'
        }
    }

changeMessage(){
    this.setState({
        message:'Thank you for visiting'
    })

    
}

render(){
    return(
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Susbscribe</button>
        </div>
    )
}

}
export default Message;