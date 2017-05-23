import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import RaisedButton from 'material-ui/RaisedButton';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

export default class CodeRedactor extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	value: this.props.value.content
		    };
		  }

		 updateCode=(newCode)=>{
				this.setState({
					value: newCode,
				});
			}

		change=()=>{
			this.props.change('content', this.state.value)
			this.props.close()
		}
render(){
	var options = {
			lineNumbers: true,
			mode: this.props.value.language,
		};
	switch(this.props.value.language){
		case 'python':
			require('codemirror/mode/python/python');
			break;
		case 'javascript':
			require('codemirror/mode/javascript/javascript');
			break;
	}
	const style={
		margin: 12
	}
		return <div>
					<CodeMirror value={this.state.value} onChange={this.updateCode} options={options} />
					<div style={{textAlign: "right"}}>	
						<RaisedButton label="Отмена" style={style} onClick={()=>this.props.close()}/> 
						<RaisedButton label="Сохранить" style={style} backgroundColor='rgb(66, 133, 244)'
						 onClick={()=>this.change()} labelColor='#fff'/>
					</div>
				</div>
	
	}
	}

	



