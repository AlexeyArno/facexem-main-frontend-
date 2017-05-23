import React, {Component , PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import {List, ListItem} from 'material-ui/List';

export default class Progress extends Component{

	handllink=(name)=>{
		this.context.router.push({
			 pathname: '/'+name
		});
	}

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
		var subjectName = item.subjectName
		// if(subjectName.length > 13){
		// 	subjectName = subjectName.substr(0,14)+'...'
		// }
		var line = <div className="loader" style={loaderstyle}>

						<div className="insideLoader" style={insideLoader}></div>
					</div>		
		return(
			 <ListItem key={index}
			 	onClick={()=>this.handllink(item.link)}
		        primaryText={subjectName}
		        rightIcon={<div className="procent">{c}</div>}
		      />
		     )
		}.bind(this))
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
		                <List style={{padding: 0}}>
							{progress}
						</List>
					</div>
					</ReactCSSTransitionGroup>
				</Paper>
			</div>
			)
	}
}

Progress.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}
