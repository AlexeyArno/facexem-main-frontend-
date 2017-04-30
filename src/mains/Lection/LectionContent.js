import React, { Component } from 'react';





export default class LectionContent extends Component{
	
	parsingContent=(text)=>{
			var task = text
			var taskContent = new Array;
				 for (var i in task) 
				 {
					if(task[i].type=='img')
					{
						var url=task[i].url;
						var style=task[i].style;
						taskContent.push(<img src={url} style={style}/>)
					}
					else if(task[i].type=='p')
					{
						var content=task[i].content;
						var style=task[i].style;
						taskContent.push(<p style={style}>{content}</p>)
					}
			}
			
		return(taskContent)
	}

	render(){
		var lectioncontent = this.parsingContent(this.props.data)
		return(	<div className="lectioncontent">


	{lectioncontent}

	</div>)

	}
}