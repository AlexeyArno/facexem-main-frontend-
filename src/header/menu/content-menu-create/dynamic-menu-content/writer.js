import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';

import EditorBorderColor from 'material-ui/svg-icons/editor/border-color'


export default class WriterMenu extends Component{
	
	click=(type)=>{
		this.props.clickOnItem(type)
	}

	render(){

		return(	<div>
						<MenuItem onClick={()=>this.click('author')} primaryText="Редактор" leftIcon={<EditorBorderColor color={this.props.color}/>}/>
		          			          
	</div>)

	}
}