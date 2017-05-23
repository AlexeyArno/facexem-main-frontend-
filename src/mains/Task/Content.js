import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MainDecodeWorkDisplay from '../Decode/mainDecode.js'

export default class ContentTask extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }
		  answer=(data)=>{
		  	this.props.answer(data)
		  }

		  getInputs=(data)=>{
		  	return(data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}/>
		  	}.bind(this)))
		  }

		  getContent=(data)=>{
		  	return(data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}/>
		  	}.bind(this)))
		  }

render(){
	var content =<div/>
	var inputs = <div/>
	this.props.data.content.map(function(item, index){
		item.type == "mainquest" ? content = this.getContent(item) : inputs = this.getInputs(item)
	}.bind(this))
	var button  = (this.props.nowAnswer)?  <div style={{textAlign: 'right'}}> <RaisedButton
																				          primary={true}
																				          label='Ответить'
																				          disableTouchRipple={true}
																				          disableFocusRipple={true}
																				          onClick={this.props.sendAnswer}
																				          labelColor='#fff'
																				          style={{ margin: 10}}
																					        /> </div> :  <div/>
	return(<div>

		{content}
		<hr/>
		{inputs}
		<hr/>
		{button}
						
		
		</div>

		

		   )

}



}