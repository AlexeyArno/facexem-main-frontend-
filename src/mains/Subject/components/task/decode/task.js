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
		var taskContent=<MainDecodeWorkDisplay data={content}/>
		var taskDescripton=new Array;
		var answer='';
		//  content.map(function(item, index){
		// 	if(count==0){
		// 		if(item.type=='p'){
		// 			var content=item.content;
		// 			var style=item.style;
		// 			taskContent.push(<p key={index}  style={style}>{content}</p>)
		// 		}
		// 		else if(item.type=='img')
		// 			{
		// 				var url=item.url;
		// 				var style=item.style;
		// 				taskContent.push(<img key={index} src={url} style={style}/>)
		// 			}
		// 		else if(item.type == 'answer')
		// 		{
		// 			count=1;
		// 			answer = item.answer;
		// 		}
		// 	}else{
		// 		if(item.type=='p'){
		// 			var content=item.content;
		// 			var style=item.style;
		// 			taskDescripton.push(<p key={index} style={style}>{content}</p>)
		// 		}
		// 		else if(item.type=='img')
		// 			{
		// 				var url=item.url;
		// 				var style=item.style;
		// 				taskDescripton.push(<img key={index} src={url} style={style}/>)
		// 			}
		// 	}
		// })
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
			

				<div id='contentTaskSettings' style={{position: "relative"}}><div style={{opacity: opacity}}>{content}</div><div>
				<TextField
  				style={{padding: '5px', zIndex: 0}}
    			floatingLabelText="Ответ"
    			floatingLabelFocusStyle={{color: '#a4c639'}}
					underlineFocusStyle={{borderColor: '#a4c639'}}
					id={idTextfield}
		    />

			    <RaisedButton label="Ответить" style={{margin: '10px'}} id={id}  onClick={()=>this.clickAnswer(id,answer)} backgroundColor="#a4c639"/></div>
			    <div id={idSupport}></div>
			    <div style={{display: 'none'}} id={idDescription}>
			    <div ><div style={{display: 'inline-block'}}>Правильный ответ:</div><div className="RightAnswer">{answer}</div></div>
			    <div  id="formUserAnswer" ><div style={{display: 'inline-block'}}>Ваш ответ:</div><div id="UserAnswer" className="UserAnswer" ></div></div>
			    <div style={{ opacity: opacity}}>{description}</div></div></div>
		    
    </MuiThemeProvider>

		

		   )

}



}