import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDone from 'material-ui/svg-icons/action/done'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import ReactSwipe from 'react-swipe';
import ActionLaunch from 'material-ui/svg-icons/action/launch'
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';

import TaskDialog from './taskDialog.js'


import MainDecodeWorkDisplay from '../modules.js'


export default class TestTask extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	slide: 0,
		    	answer: [],
		    	launch: false,
		    	input_key: Math.random()
		    	   };
		  }


		    answer=(type, data, index)=>{
				var answer = this.state.answer
			  	switch(type){
			  		case 'text':
			  			answer[index] = data
			  			break;
			  		case 'few-fields':
			  		case 'check':
			  			answer[index][data.index] = data.value
			  			break;
			  		case 'radio':
			  			answer[index] = data
			  			break;
			  		case 'check_create':
			  			if(!answer[index]){
			  				answer[index] = new Array
			  			}
			  			answer[index].push(data.value)
			  			this.setState({answer})
			  			return 0;
			  			break;
			  	}
			  	this.setState({
			  		answer
			  	})
		  		this.props.answer(this.props.index, answer)
		  }


		   getInputs=(data, spec_id)=>{
		  	var input = data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}
		  				 index={spec_id} value={this.props.value[spec_id]}/>
		  	}.bind(this))
		  	return <div>{input}</div>
		  }

		  getContent=(data)=>{
		  	return(data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}
		  				 index={index} />
		  	}.bind(this)))
		  }

next=()=>{
	var ref = "reactSwipe"+this.props.index
	this.refs[ref].next()
	var slide =(this.state.slide<this.props.data.content.length-1)? this.state.slide+1:this.state.slide
	this.setState({
		slide
	})
}

prev=()=>{
	var ref = "reactSwipe"+this.props.index
	this.refs[ref].prev()
	var slide =(this.state.slide>0)? this.state.slide-1:this.state.slide
	this.setState({
		slide
	})
}


launch=()=>{
	if(this.state.launch){
		 		document.getElementById('root').style.filter = ''
		 	}else{
		 		document.getElementById('root').style.filter = 'blur(2px)'
		 	}
	var key_inputs = this.state.key_inputs
	if(this.state.launch){
		key_inputs= Math.random()
	}
	this.setState({
		launch: !this.state.launch,key_inputs
	})

}



render(){
	var content = <div/>
	var inputs = []
	var count_inputs = 0
	this.props.data.content.map(function(item, index){
		switch(item.type){
			case 'mainquest':
				content=this.getContent(item)
				break;
			default:
				var input = this.getInputs(item, count_inputs)
				inputs.push(<div key={index}>{input}</div>)
				count_inputs++
				break;
		}
	}.bind(this))
	const style_button={
		margin: 15
	}
	var button = (count_inputs-1 === this.state.slide)? <div/>:<RaisedButton style={style_button} onClick={this.next} label="Дальше"/>
	var buttonPrev = (this.state.slide>0)?<RaisedButton style={style_button} onClick={this.prev} label="Назад"/>:<div/>
	const closeStyle={
			position: 'absolute',
			top: '18px',
			right: '20px'
		}
	var dialogContent = <Dialog
				          title={"Задание "+ this.props.data.number}
				          modal={false}
				          task={true}
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          open={this.state.launch}
				          autoScrollBodyContent={true}
				          bodyClassName='dialogBodyTable'
				          onRequestClose={this.launch}
				          contentStyle={{padding: 0,  maxWidth: 700, width: "90%"}}
				          autoDetectWindowHeight={false}
				          style={{maxHeight: 500}}
				        >	
						        <IconButton onClick={this.launch} style={closeStyle}><Close color='rgb(33, 150, 243)'/></IconButton>
								<TaskDialog data={this.props.data} close={this.launch} value={this.props.value} answer={this.answer} now_answer={this.state.answer}/>		 	       	
				        </Dialog>









	return(<div >
				<div style={{fontSize: 18}}>
					<div style={{display: 'inline-block'}}>Задание</div>
					<div style={{color: "blue", display: 'inline-block', color: this.props.color, marginLeft: 10}}>{this.props.data.number}</div>
					<IconButton tooltip="Развернуть" onClick={this.launch} iconStyle={{width: 16, height: 16}} 
								style={{float: 'right', marginRight: 10, width: 28, height: 28, padding: 4}} >
						<ActionLaunch />
					</IconButton>
				</div>
				<hr style={{marginTop: 10}}/>
				<div style={{display:'inline-block', width:" 100%"}}>
					{content}
				</div>
				<hr  />
				<div style={{display:'inline-block', width: "100%"}} id='inputs_task' key={this.state.key_inputs}>
					<ReactSwipe 	ref={"reactSwipe"+this.props.index} 
				  					swipeOptions={{continuous: false, startSlide: this.state.slide,
				  					speed: 600}}>
						{inputs}
					</ReactSwipe>
				</div>
				<hr/>
				<div style={{textAlign: 'right'}}>
						{buttonPrev}
						{button}
					
				</div>
				{dialogContent}

		</div>	

		

		   )

}



}