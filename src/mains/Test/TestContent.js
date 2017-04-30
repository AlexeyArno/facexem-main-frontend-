import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class TestContent extends Component{
	clickAnswer=(key)=>{
		var value = document.getElementById('input'+key).value
		var answer = this.state.answers[key-1]
		var label = document.getElementById('button'+key)
		console.log(label)
	}


	parsingContent=(text)=>{
			var task = text
			var taskContent = new Array;
				 for (var i in task) 
				 {
					if(i=='img')
					{
						var url;
						var style;
						for(var j in task.img)
						{
							if(j=="url")
							{
								url=task.img.url
							}
							else if(j=='style')
							{
								style=task.img.style
							}
						}						
						taskContent.push(<img src={url} style={style}/>)
					}
					else if(i=='p')
					{
						var content;
						var style;
						for(var j in task.p)
						{
							if(j=="content")
							{
								content=task.p.content
							}
							else if(j=='style')
							{
								style=task.p.style
							}
						}
						taskContent.push(<div style={style}>{content}</div>)
					}
			}
		return(taskContent)
	}
	constructor (props) {
		super(props);
		this.state = {
			data: this.props.data.content,
			answers: this.props.answers,
			descriptions: []
		 };
	}


	render(){
		var data=this.props.data
		var path = window.location.pathname;
		var newpath= new Array();
		var count=0;
		for (var i=0;i<path.length;i++){
				if(path[i]=='/'){
					if(count==1){
						path=newpath
					}
					count++
				}
			newpath+=path[i]
		}
		var color;
		var closeColor;
		switch(path){
			case '/':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;
			case '/chemistry':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;
			case '/math':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;
			case '/russian':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;
			case '/english':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;
			case '/physics':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;
			case '/history':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;
			case '/information':
				color = '#2196F3';
				closeColor = '#2196F3'
				break;}
		var count = 1
		var tasks= data.content.map(function(item, index){
			var task=item.question
			var taskContent = this.parsingContent(task)
			console.log(taskContent)
			var id=count
			var styleAnswer={
			  errorStyle: {
			    color: 'red',
			  },
			  underlineStyle: {
			    borderColor: color,
			  },
			  floatingLabelStyle: {
			    color: color,
			  },
			  floatingLabelFocusStyle: {
			    color: color,
			  },
			  style:{
			  	width: "245px",
			  }
			}
			const labelStyle={
				color: 'white',
				textAlign: 'left',
				height: "20px"
			}
			var numberTask=count
			var answer = this.state.descriptions[numberTask-1]
			count++
			return(<div key={index} className='testOnTestPage'>
					<div className="numberTask" style={{backgroundColor: color}}>{numberTask}</div>
					<div className="taskContent">{taskContent}</div>
					<div style={{textAlign:'left'}}>
					    <TextField
					    floatingLabelFocusStyle={styleAnswer.floatingLabelFocusStyle}
      					underlineFocusStyle={styleAnswer.underlineStyle}
					    fullWidth={false}
					    style={styleAnswer.style}
					    floatingLabelText="Ответ"
					    id={'input'+id}
					    />
					</div>
					<hr/>
					<div id={'answer'+id}>{answer}</div>
					
				</div>
				)
			
		}.bind(this))
		const labelStyle={
				color: 'white',
				textAlign: 'left',
				height: "20px"
			}
		return(	<div>
						{tasks}
					<FlatButton label="ответить" className="ButtonTask" labelStyle={labelStyle}  backgroundColor={color} hoverColor={closeColor} onClick={this.clickAnswer}/>
				</div>
				)

	}
}