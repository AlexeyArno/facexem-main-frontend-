import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Answer from './Answer.js'
import ContentTask from './Content.js'
import Timer from './timer.js'

export default class Task extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	answer: [],
		    	type: 0,
		    	timer: 0
		    };
		  }

		  //  	 shouldComponentUpdate=(nextProps, nextState)=>{
		  //  	 	if(nextState.answer){
		  //  	 		var objControl=document.getElementById("answer");
				// 	objControl.scrollTop = objControl.offsetTop+10;
		  //  	 	}
		  //   	return true
		  // }

		  timer=(timer)=>{
		  
		  }


		  componentWillMount=()=>{
		  	var date = new Date()
		  	this.setState({timer: date})
		  }



		  answer=(data, index)=>{
		  	var answer = this.state.answer
		  	answer[index] = data
		  	this.setState({
		  		answer
		  	})
		  }

		  sendAnswer=(timer)=>{
		  	this.props.answer(this.props.data.id, this.state.answer, timer)
		  }

		  next = ()=>{
		  	var date = new Date()
		  	this.setState({
		  		type: 0,
		  		answer: [],
		  		timer: date

		  	})
		  	this.props.next()
		  	document.getElementById('mainTaskWindow').style.minHeight = '0px'
		  }

		 getAnswer=()=>{
		  	var xmlhttp = new XMLHttpRequest()
		  	var time = new Date() - this.state.timer
		  	time = Math.floor(time/1000)
		  	var data = {
		  		token: this.props.token,
		  		id: this.props.data.id,
		  		answer: this.state.answer
		  	}
		  	var body=  JSON.stringify({token: data.token, id: data.id, answers: data.answer, time})
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
	// console.log(this.state.answer)
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
					maxHeight={cowntentMaxHeight} nowAnswer={this.state.answer} type={this.state.type} timer={this.state.timer}
					setTimer={this.timer}/>
			
				{element}
		
			</div>

		

		   )

}



}