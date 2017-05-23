import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


// SETTINGS 


export default class ParagraphWorkWindow extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    	value: '',
		    	open: false
		    };
		   
		  }


	

 

render(){	
			var content = this.props.data.content
			var name = 'col-md-12'
			if(this.props.data.size == 'half'){
				name = 'col-md-6'
			}

			return(
				<div style={{paddingRight: "20px"}} className={name}>
						<p>{content}</p>
				</div>)

		   

		


}



}