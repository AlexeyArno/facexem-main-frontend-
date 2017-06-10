import React, { Component, 	PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'





export default class NotFound extends Component{
	
	onClick=()=>{
				this.context.router.push({
					  pathname: '/mypage'
					});
	}

	render(){

		return(	<div style={{ marginTop: 60, zIndex: 2, textAlign: "center"}} id='nowpage'>

				<p style={{fontSize: 40, margin: 'auto', fontWeight: 600, opacity: 0.4}}>ПОТРАЧЕНО:(</p>
				<p style={{ fontSize: 16, marginLeft: 7,
				fontWeight: 400, opacity: 0.4, position: 'relative'}}>Страничка не найдена</p>
				<RaisedButton
				  onClick={this.onClick}
			      label="Вернуться"
			      secondary={true}
			      style={{margin: 12}}
			      icon={<NavigationArrowBack/>}
			    />



	</div>)

	}
}

NotFound.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}