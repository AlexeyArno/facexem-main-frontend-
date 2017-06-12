import React, {Component , PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class Progress extends Component{

	handllink=(name)=>{
		this.context.router.push({
			 pathname: '/'+name
		});
	}

	render(){

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
				</Paper>
			</div>)
	}
}

Progress.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}
