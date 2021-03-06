import React, { Component, 	PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class Last extends Component{

	 handllink=(name)=>{
			this.context.router.push({
			  pathname: name
			});
					
	 }

render(){
	var lasts = this.props.data.map(function(item, index){
		if(item.link){
			return(
			<div key={index} className="lineChange" onClick={()=>this.handllink(item.link)}>
				<img src={item.img} className='imgLast'/>
				<div className='textLast'>{item.text}</div>
			</div>

			)
		}
		return(
			<div key={index} className="lineChange" >
				<img src={item.img} className='imgLast'/>
				<div className='textLast'>{item.text}</div>
			</div>

			)
	}.bind(this))
	lasts = (lasts.length>0)? lasts: <div style={{textAlign: 'center', marginTop: '30%', opacity: '0.6'}}>Пусто</div>
	return(

		<div className="col-xs-12 col-sm-4 paper">
				<Paper className="progresspaper">
					<div className="Up">Последние события</div>
					<hr/>
				<ReactCSSTransitionGroup
					transitionName="example"
		               transitionAppear={true} transitionAppearTimeout={2000}
		               transitionEnter={false} transitionLeave={false}>
					<div className="lastchange">

						{lasts}
						</div>
					</ReactCSSTransitionGroup>
				</Paper>
			</div>

		)
}

}
Last.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}