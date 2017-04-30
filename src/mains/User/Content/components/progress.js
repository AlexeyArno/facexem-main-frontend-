import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class Progress extends Component{

	render(){
		var loaderstyle;
		var	c=0;
		var loaderstyle = {
			background: '#EEEEEE',
			height: 20,
			borderRadius: 2,
		}
		var progress = this.props.subjectsP.map(function(item, index){
		var j = item.subjectCount;
		var c = Math.round(j/item.subjectAll*100) + '%';
		var insideLoader = {
			width: c,
			background: '#2196F3',
			height: 20,
			borderRadius: 2,
		}			
			return(
				<div key={index} className="progressLine">
					<div className="progressTitle">{item.subjectName}</div>
					<div className="loader" style={loaderstyle}>

					<div className="insideLoader" style={insideLoader}></div>
</div>
					<div className="procent">{c}</div>
				</div>
				)


		})
		return(
				<div className="col-xs-12 col-sm-4 paper">
				<Paper className="progresspaper">
					<div className="Up">Прогресс</div>
					<hr/>
				<ReactCSSTransitionGroup
					transitionName="example"
		               transitionAppear = {true} transitionAppearTimeout = {2000}
		               transitionEnter = {false} transitionLeave = {false}>
		               <div className="testContent">
					{progress}
					</div>
					</ReactCSSTransitionGroup>
				</Paper>
			</div>
			)
	}
}
