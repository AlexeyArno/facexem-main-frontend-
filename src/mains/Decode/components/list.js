import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class ListWorkWindow extends Component{
		constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    };
		}



render(){
	var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
	var item = this.props.data
	var content = item.content.map(function(item, index){
		return(this.getItem(item, index))
	}.bind(this))
	var parent = <ol>{content}</ol>
	if(item.typeList == 'holes'){
		parent = <ul>{content}</ul>
	}

	return(<div style={{paddingRight: 20}} className={name}>
			{parent}
		</div>
)

}



}