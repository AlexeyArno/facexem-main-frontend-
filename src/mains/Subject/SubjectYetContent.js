import React, { Component } from 'react';
import Variants from './components/variants.js'
import Statistics from './components/static.js'
import Challenge from './components/challenge.js'
import Tasks from './components/tasks.js'
import TasksStat from './components/tasksStat.js'

export default class SubjectYetContent extends Component{
	


	render(){
		return(	<div id='YetChoose'>
					<Tasks color={this.props.data} closeColor={this.props.close} data={10}/>
					<Variants color={this.props.data} closeColor={this.props.close}/>
					<TasksStat />
					<Statistics/>
					<Challenge/>
				</div>)

	}
}