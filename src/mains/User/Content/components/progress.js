import React, {Component , PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class Progress extends Component{

	handllink=(name)=>{
		this.context.router.push({
			 pathname: '/'+name
		});
	}




	getList=()=>{
		return this.props.subjects.map(function(item, index){
			return  <ListItem primaryText={item.subjectName} key={index} onClick={()=>this.handllink(item.link)}
							  rightIcon={<div style={{width: 25, height: 25, paddingTop: 5, color: this.props.color}}>{item.subjectCount}</div>} />
		}.bind(this))
	}

	render(){
		var list = this.getList()
		return (<div className="col-xs-12 col-sm-4 paper">
				<Paper className="progresspaper">
					<div className="Up">Прогресс</div>
					<hr/>
				<ReactCSSTransitionGroup
					transitionName="example"
		               transitionAppear={true} transitionAppearTimeout={2000}
		               transitionEnter={false} transitionLeave={false}>
		               <div/>

					</ReactCSSTransitionGroup>
					<List style={{margin: 0, padding: 0}}>
						{list}
					</List>
				</Paper>
			</div>)
	}
}

Progress.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}
