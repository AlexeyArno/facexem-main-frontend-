import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import EditorBorderColor from 'material-ui/svg-icons/editor/border-color'
import ActionBuild from 'material-ui/svg-icons/action/build';


export default class AdminMenu extends Component{
	
	click=(type)=>{
		this.props.clickOnItem(type)
	}

	render(){

		return(	<div>
						<MenuItem onClick={()=>this.click('admin')} primaryText="Панель управления" leftIcon={<ActionBuild color={this.props.color}/>}/>
						<MenuItem onClick={()=>this.click('author')} primaryText="Редактор" leftIcon={<EditorBorderColor color={this.props.color}/>}/>
			          			          
	</div>)

	}
}