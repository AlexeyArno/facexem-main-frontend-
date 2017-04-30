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


export default class CodeWorkWindow extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: this.props.data,
		    };
		  }
	editSmth=(index)=>{
		this.props.editSmth(index)
	}

render(){
	var index = this.props.index
	var id = 'content'+index
	var theme = lightBaseTheme
	var opacity = 1
	if(this.props.theme){
		theme = darkBaseTheme
		opacity = 0.7
	}
	
	return(<div style={{paddingRight: "20px", opacity: opacity}} id={id}>
	
				<MuiThemeProvider muiTheme={getMuiTheme(theme)}>
				<Paper className="CodeShell">
				<AppBar title='Пример' 
					iconElementRight={<ActionCode color="white"/>} 
					showMenuIconButton={false} 
					className="codeDescription"
					titleStyle={{lineHeight: 1.6, maxHeight: '50px'}}
					style={{backgroundColor:'rgb(164, 198, 57)', zIndex: 2}}
					iconStyleRight={{marginBottom: '5px'}}
					/>
				<SyntaxHighlighter language='python' useInlineStyles={true} style={docco} className="Code">{this.state.data}</SyntaxHighlighter>
				</Paper>
				</MuiThemeProvider>
			</div>

		

		   )

}



}