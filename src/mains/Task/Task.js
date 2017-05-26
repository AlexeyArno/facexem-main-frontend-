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

		  //  	 shouldComponentUpdate=(nextProps, nextState)=>{
		  //  	 	if(nextState.answer){
		  //  	 		var objControl=document.getElementById("answer");
				// 	objControl.scrollTop = objControl.offsetTop+10;
		  //  	 	}
		  //   	return true
		  // }



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

		 getAnswer=()=>{
		  	var xmlhttp = new XMLHttpRequest()
		  	var data = {
		  		token: this.props.token,
		  		id: this.props.data.id,
		  		answer: [this.state.answer] 
		  	}
		  	var body=  JSON.stringify({token: data.token, id: data.id, answers: data.answer})
			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_answer', false);
			xmlhttp.send(body);  
			if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText)
				if (!request.result){
					return request.answer
				}
			}

		  }

	
		  


render(){
	var element = <div/>
	var cowntentMaxHeight = 0
	if(this.state.type){
		var answer = this.getAnswer()
		element = <Answer data={answer} token={this.props.token} next={this.next} id={this.props.data.id}/>
		cowntentMaxHeight = 580
	}

	var style=(this.state.type)?{maxHeight: 655, overflow: 'hidden'} : {}
	return(<div style={style}>
				<ContentTask data={this.props.data} answer={this.answer}   sendAnswer={()=>this.setState({type: 1})} 
					maxHeight={cowntentMaxHeight} nowAnswer={this.state.answer} type={this.state.type}/>
			
				{element}
		
			</div>

		

		   )

}



}