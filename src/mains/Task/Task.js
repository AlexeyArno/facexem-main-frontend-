import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Answer from './Answer.js'
import ContentTask from './Content.js'


export default class Task extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	answer: false
		    };
		  }

		  answer=(data)=>{
		  	this.setState({
		  		answer: data
		  	})
		  }
		  sendAnswer=()=>{
		  	this.props.answer(this.props.data.id, this.state.answer)

		  }
		  


render(){
	// var element = <ContentTask/>
	// if(this.props.type == 1){
	// 	element = <Answer/>
	// }
	console.log(this.state.answer)
	var element = (this.props.type == 1)? <Answer data={this.props.data} next={this.props.next}/> : <ContentTask data={this.props.data} answer={this.answer} sendAnswer={this.sendAnswer} nowAnswer={this.state.answer}/>
	
	return(<div>
				{element}

			</div>

		

		   )

}



}