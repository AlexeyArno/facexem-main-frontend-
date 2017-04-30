import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


export default class ParagraphWorkWindow extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    	data: this.props.data,
		    };
		  }
		editSmth=(index)=>{
		this.props.editSmth(index)
	}

	parsingText=(content)=>{
		var text = new Array;
		content.map(function(item, index){
			text.push(item.content)
		})
		return text
	}	  

render(){
	var content = this.parsingText(this.state.data)
	var theme = lightBaseTheme
	var opacity = 1
	if( this.props.theme){
		theme = darkBaseTheme
		opacity = 0.7
	}
	var style={color: theme.palette.textColor, opacity: opacity, margin: 10}
	var id = 'content'+this.props.index
	return(<div style={{paddingRight: "20px"}}>
		
			
				<div className="word" id={id} style={style}>{content}</div>
				
			</div>
		   )

		


}



}