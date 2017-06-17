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



export default class TestBody extends Component{

	constructor (props) {
		super(props);
		this.state = {
			startSlide: 0
		 };
	}


	componentWillMount=()=>{
		var answer = []
		for(var i =0; i<this.props.data.length;i++){
			answer.push([])
		}
		var timer = new Date()
		this.setState({answer, timer})
	}	

	answer=(index,data)=>{
		var answer = this.state.answer
		answer[index] = data
		this.setState({
			answer
		})
	}



	getTasks=(data)=>{
		var tasks = data.map(function(item, index){
		return 	<div style={{padding: 10}}>
					<Paper zDepth={1} key={index} style={{maxWidth: 700, margin: 'auto', padding: 15}}>
						<TestTask data={item} answer={this.answer} next={this.next} index={index}
								  key={index} color={this.props.color} value={this.state.answer[index]}/>
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
				</div>
				)

	}
}

	