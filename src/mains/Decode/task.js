import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import MainDecodeWorkDisplay from './mainDecode.js'


export default class TaskWorkWindow extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	night: this.props.theme
		    };
		  }
	parsingTask=(content)=>{
		var count=0;
		var taskContent=<MainDecodeWorkDisplay data={content}  token={this.props.token}
						delete={this.props.delete} change={this.props.change}/>
		var taskDescripton=new Array;
		var answer='';
		 var returnData=[taskContent, answer, taskDescripton]
		 return(returnData)
	}

		editSmth=(index)=>{
		this.props.editSmth(index)
	}
	clickAnswer=(id, answer)=>{

	}

render(){
	var index = this.props.index
	var item = this.props.item
	var id='setting'+item.id
	var nowId= 'setting'+id
	var idDescription='description'+id
	var idTextfield = 'text'+id
	var idSupport = 'support'+id
	var nowTest = this.parsingTask(item.content)
	var content = nowTest[0]
	var answer = nowTest[1];
	var description = nowTest[2];
	var theme = lightBaseTheme
	var opacity = 1
	if(this.state.night){
		theme = darkBaseTheme
		opacity = 0.7
	}
	
	return(<MuiThemeProvider muiTheme={getMuiTheme(theme)}>
			

				<div id='contentTaskSettings' style={{position: "relative"}}><div style={{opacity: opacity}}>{content}</div></div>
				
		    
    </MuiThemeProvider>

		

		   )

}



}