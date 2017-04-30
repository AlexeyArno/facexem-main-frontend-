import React, { Component } from 'react';

import ParagraphWorkWindow from './components/paragraph.js'
import TitlehWorkWindow from './components/title.js'
import ImageWorkWindow from './components/image.js'
import CodeWorkWindow from './components/code.js'
import TooltipWorkWindow from './components/tooltip.js'
import VideoWorkWindow from './components/video.js'
import FormulWorkWindow from './components/formul.js'
import ListWorkWindow from './components/list.js'

export default class MainDecodeWorkDisplay extends Component{

	editSmth=(index)=>{
		this.props.click(index)
	}




render(){
	var taskContent = new Array;
	var content
	var theme = this.props.night
	var data = this.props.data
	data.map(function(item, index){
		var type = item.type
		switch(type){
			case 'paragraph':
				content = <ParagraphWorkWindow data={item.content} key={index} theme={theme} index={index} editSmth={this.editSmth} />
				break;
			case 'title':
				content = <TitlehWorkWindow data={item.content} key={index} index={index} editSmth={this.editSmth}/>
				break;
			case 'img':
				content = <ImageWorkWindow item={item} key={index} index={index} editSmth={this.editSmth}/>
				break;
			case 'code':
				content = <CodeWorkWindow data={item.content} key={index} index={index} theme={theme} editSmth={this.editSmth}/>
				break;
			case 'tooltip':
				content = <TooltipWorkWindow item={item} key={index} index={index} />
				break;
			case 'video':
				content=<VideoWorkWindow item={item} key={index} index={index} displayType={'desktop'} />
				break;
			case 'formul':
				content = <FormulWorkWindow data={item.content} key={index} index={index} theme={theme} editSmth={this.editSmth}/>
				break;
			case 'list':
				content = <ListWorkWindow item={item} key={index} theme={theme} index={index} editSmth={this.editSmth}/>
				break;
			default:
				content = <div key={index}/>
				break;
		}
		taskContent.push(content)
	}.bind(this))
	
	return(

			<div>
			{taskContent}
			</div>	

		   )

}



}