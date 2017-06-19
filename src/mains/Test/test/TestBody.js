import React, { Component } from 'react';
// import ContentTask from '../Task/Content.js'
import TestTask from './testTask.js'
import Paper from 'material-ui/Paper';
import ReactSwipe from 'react-swipe';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import FlatButton from 'material-ui/FlatButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import RaisedButton from 'material-ui/RaisedButton';
import ActionDone from 'material-ui/svg-icons/action/done'



export default class TestBody extends Component{

	constructor (props) {
		super(props);
		this.state = {
			type: 'test'
		 };
	}
	getSubjectName=()=>{
		var name = window.location.pathname
		name = Array.from(name)
		var subject = []
		var point= 0
		for (var i =0; i<name.length;i++){
			if(name[i]=='/' ){
				point++
			}
			if(i==0){continue}
			if(point==1){
				subject.push(name[i])
			}
		}
		return subject.join('')

	}


	componentWillMount=()=>{
		var answer = []
		var ids = this.props.data.map(function(item, index){
			answer.push([])
			return item.id
		})
		var timer = new Date()
		this.setState({answer, timer, ids})
	}	

	answer=(index,data)=>{
		var answer = this.state.answer
		answer[index] = data
		this.setState({
			answer
		})
	}



	getAnswers=()=>{
		var answers = {}	
		this.state.answer.map(function(item,index){
			answers[this.state.ids[index]] = item
		}.bind(this))
		var token = this.props.token
		var codename = this.getSubjectName()
		var time = new Date() - this.state.timer
		time = Math.floor(time/1000)
		var xmlhttp = new XMLHttpRequest()
		var body =  JSON.stringify({token, answers, time, codename})  
		xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/check-test', true);
		xmlhttp.send(body); 
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState !== 4) return;
			if(xmlhttp.status === 200) {
				var data = JSON.parse(xmlhttp.responseText)
				if (data.result !== 'Error' ){
						this.setState({type: 'answer'})
						
					}
			}
		}.bind(this) 
	}



	getTasks=(data)=>{
		var tasks = data.map(function(item, index){
		return 	<div style={{padding: 10}}  key={index} >
					<Paper zDepth={1} key={index} style={{maxWidth: 700, margin: 'auto', padding: 15}}>
						<TestTask data={item} answer={this.answer} next={this.next} index={index}
								  color={this.props.color} value={this.state.answer[index]}/>
					</Paper>
				</div>
		}.bind(this))
		return tasks
		}


	render(){
		var tasks = this.getTasks(this.props.data)
		return(	<div style={{maxWidth: 700, margin: 'auto'}} id='test_inputs_task'>
					<div style={{textAlign: 'center', marginBottom: 20}}>
					
					</div>
						<ReactCSSTransitionGroup
								 transitionName="opacity"
					               transitionAppear={true} transitionAppearTimeout={800}
					               transitionEnter={false} transitionLeave={false}>
				
								{tasks}
						</ReactCSSTransitionGroup>
						<RaisedButton label="Проверить" style={{margin:'20px',display: 'block', bottom: 20, left: 20}}
									  backgroundColor={this.props.color} labelColor="#fff" onClick={this.getAnswers}
									  icon={<ActionDone color="#fff"/>} labelPosition="before"/>
				</div>
				)

	}
}

	