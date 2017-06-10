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
		var path = window.location.pathname;
		var name;
		var color = '#2196F3';
		var closeColor;

		var content;
		var style={
			color: color
		}
		const styles = {
			slide:{
				height: '100%'
			},
			slide1:{
				maxHeight: 1750,
			}
		}

				
		return(	<div>
				
				<div className="contentRow" id='contentRowSubjectPage'>
					<div >
					      <SubjectYetContent  color={color}  data={this.props.data}/>
					</div>

					
				</div>

	</div>)

	}
}