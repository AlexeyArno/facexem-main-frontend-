import React, { Component } from 'react';

import ParagraphWorkWindow from './components/paragraph.js'
import ImageWorkWindow from './components/image.js'
import CodeWorkWindow from './components/code.js'
import FormulWorkWindow from './components/formul.js'
import ListWorkWindow from './components/list.js'
import Check from './components/check.js'
import Radio from './components/radio.js'
import TextFieldAnswer from './components/textfield.js'

export default class MainDecodeWorkDisplay extends Component{

	constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

	answer=(data)=>{
		this.props.answer(data)
		// console.log(data)
	}


render(){
	var item = this.props.item
		switch(item.type){
			case "paragraph":
				return(<ParagraphWorkWindow  data={item} />)
			case 'img':
				return(<ImageWorkWindow  data={item}/>)
			case 'code':
				return(<CodeWorkWindow  data={item} />)
			case 'list':
				return(<ListWorkWindow  data={item} />)
			case 'check':
				return(<Check  data={item} answer={this.answer}/>)
			case 'radio':
				return(<Radio  data={item} answer={this.answer}/>)
			case 'field':
				return(<TextFieldAnswer  data={item} answer={this.answer}/>)
			default:
				return <div>Some failed!!!</div>
		}

}
}