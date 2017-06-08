import React, {Component , PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MainDecodeWorkDisplay from '../Decode/mainDecode.js'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDone from 'material-ui/svg-icons/action/done'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


export default class ContentTask extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    
		    };
		  }







		  getMobileAnswer=()=>{
		  	const style = {
				  position:"fixed",
				  right: 10,
				  bottom: 10,
				  zIndex: 9999,
				};

		  	return 	<ReactCSSTransitionGroup
							 transitionName="example"
				               transitionAppear = {true} transitionAppearTimeout = {2000}
				               transitionEnter = {false} transitionLeave = {false}>
		  			<div id='mobile-answer'>
						<FloatingActionButton style={style} backgroundColor='rgb(66, 133, 244)' 
												onClick={this.props.sendAnswer} zDepth={3}>
					      <ActionDone />
					    </FloatingActionButton>
					</div>
				</ReactCSSTransitionGroup>
		  }


		  answer=(data, index)=>{
		  	
		  	this.props.answer(data, index)

		  }

		  getInputs=(data)=>{
		  	return(data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer} index={index}/>
		  	}.bind(this)))
		  }

		  getContent=(data)=>{
		  	return(data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer} index={index}/>
		  	}.bind(this)))
		  }



		  getAnswer =()=>{
		  	this.props.sendAnswer()
		  }



render(){
	var content =<div/>
	var inputs = <div/>
	this.props.data.content.map(function(item, index){
		item.type == "mainquest" ? content = this.getContent(item) : inputs = this.getInputs(item)
	}.bind(this))









	var buttonElement =   <ReactCSSTransitionGroup
							 transitionName="opacity"
				               transitionAppear = {true} transitionAppearTimeout = {800}
				               transitionEnter = {false} transitionLeave = {false}>
				               <div id='answer'>
				               	<div style={{textAlign: 'right'}} > 
									<RaisedButton label='Ответить'  style={{ margin: 10}} 
										onClick={this.getAnswer} /> 
									</div>
								</div>
						</ReactCSSTransitionGroup>
			       			 	


















	var button  = (this.props.nowAnswer) ?  buttonElement :  <div/>

	var opacity = (this.props.type)? 0.3 : 1
	var style = {opacity: opacity, transition: 'opacity .2s ease-in', padding: '10px 0px'} 
	if(this.props.maxHeight){
		style.maxHeight = this.props.maxHeight
	}
	var mobile_button = (this.props.nowAnswer) ?  this.getMobileAnswer() :  <div/>
	const overpaper_style = {
		width: "100%",
		height: "100%",
		position: 'absolute',
		opacity: 0.6,
		zIndex: 220
	}

	var overpaper = (this.props.type)? <div style={overpaper_style}/> : <div/>	
	return(<div style={style} id='mainTaskWindow'>
				{overpaper}
				<div style={{display:'inline-block', width:" 100%"}}>
					{content}
				</div>
				<hr  />
				<div style={{display:'inline-block'}}>
					{inputs}
				</div>
				<hr/>
				{button}			
				{mobile_button}
		</div>	

		

		   )

}



}

ContentTask.contextTypes	=	{		
	router:	PropTypes.object.isRequired 
}