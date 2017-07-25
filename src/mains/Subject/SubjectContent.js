import React, { Component } from 'react';
// import SubjectLectionContent from './SubjectLectionContent.js'
import SubjectYetContent from './SubjectYetContent.js'
// import SwipeableViews from 'react-swipeable-views';


export default class SubjectContent extends Component{
			 constructor(props) {
			    super(props);
			    this.state = {
			    	subject: window.location.pathname,
			    	position: 0
			    };
			  }	



	render(){
		var color = '#2196F3';


				
		return(	<div>
				
				<div className="contentRow" id='contentRowSubjectPage'>
					<div >
					      <SubjectYetContent  color={color}  data={this.props.data} setTestDataInRedux={this.props.setTestDataInRedux} token={this.props.token}/>
					</div>

					
				</div>

	</div>)

	}
}