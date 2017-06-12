import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { docco } from 'react-syntax-highlighter/dist/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';




export default class CodeWorkWindow extends Component{


	constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		}


render(){
	var name = 'col-md-12 col-xs-12 col-sm-12 col-lg-12'
		if(this.props.data.size === 'half'){
			name = 'col-md-6 col-xs-12 	col-sm-6 col-lg-6'
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