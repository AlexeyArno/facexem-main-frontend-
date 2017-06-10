import React, { Component } from 'react';
import Variants from './components/variants.js'
import Statistics from './components/static.js'
import Challenge from './components/challenge.js'
import Tasks from './components/tasks.js'
import TasksStat from './components/tasksStat.js'
import Theme from './components/themes.js'

export default class SubjectYetContent extends Component{
	


	render(){
		var data = this.props.data
		console.log(data)
		return(	<div id='YetChoose'>
					<Tasks color={this.props.color} closeColor={this.props.close} data={data.task_info}/>
					<Variants color={this.props.color} closeColor={this.props.close} data={data.task_info}/>
					<Theme data={data}/>
					<Statistics data={data.task_info.test_points}/>
					<Challenge/>
				</div>)

	}
}