import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { docco } from 'react-syntax-highlighter/dist/styles';
import ActionCode from 'material-ui/svg-icons/action/code'
import SyntaxHighlighter from 'react-syntax-highlighter';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';




export default class CodeWorkWindow extends Component{


	constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		}


render(){
	var name = 'col-md-12 col-xs-12 col-sm-12 col-lg-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6 col-xs-12 	col-sm-6 col-lg-6'
		}
		const closeStyle={
			position: 'absolute',
			top: '15px',
			right: '20px'
		}

	return(<div style={{paddingRight: "20px"}} className={name}>
				<Paper className="CodeShell">
				<AppBar title={this.props.data.language} 
					showMenuIconButton={false} 
					className="codeDescription"
					zDepth={2}
					style={{background: '#4285f4'}}
					/>
				<SyntaxHighlighter language='python' useInlineStyles={true} style={docco} className="Code">{this.props.data.content}</SyntaxHighlighter>
				</Paper>
			</div>

		

		   )

}



}