import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';




export default class PageWithTest extends Component{

	

	render(){
		
		return(	<div className=" paper variantsPage">
				<Paper className="" >
					<div className="Up">Тесты</div>
					<hr/>
						Hello
				</Paper>
			</div>)

	}
}
PageWithTest.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}