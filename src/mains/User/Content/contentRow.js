import React, {Component} from 'react';
import Preference from './components/preference.js';
import Progress from './components/progress.js';
import SubjectsLine from './components/subjectsLine.js';
import GlobalStatic from './components/global.js';
import Statisc from './components/static.js';
import Last from './components/last.js';

export default class Subjects extends Component{

	render(){
		return(
			<div className='contentRow'>
				<SubjectsLine subjects={this.props.subjects}/>
				 <Progress subjectsP={this.props.subjects}/>
				<Preference  data={this.props.preference}/>
				<GlobalStatic data={this.props.globalstatic}/>
				<Statisc data={this.props.static}/>
				<Last data={this.props.last}/>
			</div>

			)
	}
}