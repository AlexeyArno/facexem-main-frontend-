import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Answer from './Answer.js'
import ContentTask from './Content.js'


export default class Task extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	answer: false,
		    	type: 0
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

		  next = ()=>{
		  	this.setState({
		  		type: 0,
		  		answer: false
		  	})
		  	this.props.next()
		  }

	
		  


render(){
	// var element = <ContentTask/>
	// if(this.props.type == 1){
	// 	element = <Answer/>
	// }
	var completeElement = <Answer data={this.props.description} next={this.next} id={this.props.data.id}  nowAnswer={this.state.answer}/>
	var element = (this.state.type) ? completeElement : <div/>
	var style=(this.state.type)?{maxHeight: document.getElementById('mainTaskWindow').offsetHeight, overflow: 'hidden'} : {}
	return(<div style={style}>
				<ContentTask data={this.props.data} answer={this.answer} sendAnswer={()=>this.setState({type: 1})} 
								nowAnswer={this.state.answer} type={this.state.type}/>
			
				{element}
		
			</div>

		

		   )

}



}