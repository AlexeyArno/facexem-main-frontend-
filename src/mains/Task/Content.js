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
	var buttonElement =  <div style={{textAlign: 'right'}}> <RaisedButton label='Ответить'  onClick={this.props.sendAnswer} style={{ margin: 10}} /> </div>
	var button  = (this.props.nowAnswer) ?  buttonElement :  <div/>

	var opacity = (this.props.type)? 0.3 : 1	
	return(<div style={{opacity: opacity, transition: 'opacity .2s ease-in', padding: '10px 0px'}} id='mainTaskWindow'>
			<div className="col-md-12">
				{content}
			</div>
		<hr/>
			<div className="col-md-12">
				{inputs}
			</div>
		<hr/>
			<div>
				{button}
			</div>
		</div>

		

		   )

}



}