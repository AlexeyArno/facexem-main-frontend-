import React, {Component , PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

export default class SubjectsLine extends Component{
	 handllink=(name)=>{
		this.context.router.push({
			 pathname: '/'+name
		});
					
			 }
	render(){
		var backstyle;

		var subjects = this.props.subjects.map(function(item, index){
		backstyle = {
			background: 'url(' +item.image+ ')',
			backgroundSize: "100%",
			backgroundRepeat: 'no-repeat',

		}

			return(
				<div key={index} className="coub subject-on-user-page" onClick={()=>this.handllink(item.link)}>
					<Paper style={backstyle} className="coub coub-inside">
						<div className="DownCountSubject">{item.subjectName}</div>
					</Paper>
				</div>
				)


		}.bind(this))
		return(

			<div className="col-xs-12 col-md-12 paper">
				<Paper >
					<div className="Up">Продолжить готовиться</div>
					<hr/>
					<div className='subjectLine'>
					<ReactCSSTransitionGroup
					transitionName="example"
		               transitionAppear={true} transitionAppearTimeout={2000}
		               transitionEnter={false} transitionLeave={false}>
					{subjects}
					</ReactCSSTransitionGroup>
					</div>
				</Paper>
			</div>


			);
	}
};
SubjectsLine.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}