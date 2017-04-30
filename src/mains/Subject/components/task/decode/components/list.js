import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'

export default class ListWorkWindow extends Component{

	editSmth=(index)=>{
		this.props.editSmth(index)
	}

render(){
	var theme = lightBaseTheme
	var opacity = 1
	if( this.props.theme){
		theme = darkBaseTheme
		opacity = 0.7
	}
	var style={color: theme.palette.textColor, opacity: opacity, margin: 10}
	var item = this.props.item
	var content = item.content.map(function(item, index){
		return(<li key={index} style={style}>{item.content}</li>)
	})
	var parent = <ol>{content}</ol>
	if(item.typeList == 'holes'){
		parent = <ul>{content}</ul>
	}
	
	return(<div>
	
	
			
			{parent}
		</div>
)

}



}