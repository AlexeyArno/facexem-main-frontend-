import React, { Component, 	PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Answer from './Answer.js'
import ContentTask from './Content.js'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

export default class Task extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	answer: [],
		    	type: 0,
		    	answer_input: 0
		    };
		  }

		  //  	 shouldComponentUpdate=(nextProps, nextState)=>{
		  //  	 	if(nextState.answer){
		  //  	 		var objControl=document.getElementById("answer");
				// 	objControl.scrollTop = objControl.offsetTop+10;
		  //  	 	}
		  //   	return true
		  // }

		  comeback=()=>{
				this.context.router.push({
					  pathname: '/'+this.props.subject
					});
		}


		  componentWillMount=()=>{
		  	var date = new Date()
		  	this.setState({timer: date})
		  }



		  answer=(type, data, index)=>{
		  	var answer = this.state.answer
		  	console.log(type, data, index)
		  	switch(type){
		  		case 'text':
		  			answer[index] = data
		  			break;
		  		case 'check':
		  			answer[index][data.index] = data.value
		  			break;
		  		case 'radio':
		  			answer[index] = data
		  			break;
		  		case 'check_create':
		  			if(!answer[index]){
		  				answer[index] = new Array
		  			}
		  			answer[index].push(data.value)
		  			this.setState({answer})
		  			return 0;
		  			break;
		  	}
		  	console.log(answer)
		  	this.setState({
		  		answer, answer_input: this.state.answer_input+1
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
		  		timer: date,
		  		answer_input: 0

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
		  	var body=  JSON.stringify({token: data.token, id: data.id, answers: data.answer,
		  	 time, type: this.props.type, session_key:this.props.session_key})
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
	if(this.props.data.result == 'Empty'){
		return(<div style={{padding: 20}}>
					<div>Извини, но мы ничего не смогли найти для тебя,
						можешь немного подождать пока появятся новые задания,
						или перейти к другим заданиям
					</div>
					<RaisedButton
						  onClick={this.comeback}
					      label="Вернуться"
					      secondary={true}
					      style={{margin: 12}}
					      icon={<NavigationArrowBack/>}
					    />
				</div>)
	}
	if(this.state.type){
		var answer = this.getAnswer()
		element = <Answer data={answer} token={this.props.token} next={this.next} id={this.props.data.id}/>
		cowntentMaxHeight = 580
	}
	var style={}
	if(this.state.type){
		var height = document.getElementById('mainTaskWindow').offsetHeight
		style = {maxHeight: height+165, overflow: 'hidden'}
	}
	return(<div style={style} id='wrapper_task'>
				<ContentTask data={this.props.data} answer={this.answer}   sendAnswer={()=>this.setState({type: 1})} 
					maxHeight={cowntentMaxHeight} nowAnswer={this.state.answer_input} type={this.state.type} users_answers={this.state.answer}/>
			
				{element}
		
			</div>

		

		   )

}



}
Task.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}