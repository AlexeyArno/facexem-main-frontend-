import React, {Component , PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MainDecodeWorkDisplay from '../Decode/mainDecode.js'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDone from 'material-ui/svg-icons/action/done'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import ReactSwipe from 'react-swipe';


export default class ContentTask extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	slide: 0
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
				               transitionAppear={true} transitionAppearTimeout={2000}
				               transitionEnter={false} transitionLeave={false}>
		  			<div id='mobile-answer'>
						<FloatingActionButton style={style} backgroundColor='rgb(66, 133, 244)' 
												onClick={this.props.sendAnswer} zDepth={3}>
					      <ActionDone />
					    </FloatingActionButton>
					</div>
				</ReactCSSTransitionGroup>
		  }


		  answer=(type, data, index)=>{
		  	this.props.answer(type, data, index)

		  }

		  getInputs=(data, spec_id)=>{
		  	var input = data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}
		  				 index={spec_id} />
		  	}.bind(this))
		  	return <div>{input}</div>
		  }

		  getContent=(data)=>{
		  	return(data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}
		  				 index={index} />
		  	}.bind(this)))
		  }



		  getAnswer =()=>{
		  	this.props.sendAnswer()
		  }

		   next=()=>{
			   this.setState({
			   		slide: this.state.slide+1
			   })
			    this.refs.reactSwipe.next();
			  }



render(){
	var content =<div/>
	var inputs= []
	var count_inputs = 0
	this.props.data.content.map(function(item, index){
		switch(item.type){
			case 'mainquest':
				content=this.getContent(item)
				break;
			default:
				var input = this.getInputs(item, count_inputs)
				inputs.push(<div>{input}</div>)
				count_inputs++
				break;
		}
	}.bind(this))






	var buttonElement =   <ReactCSSTransitionGroup
							 transitionName="opacity"
				               transitionAppear={true} transitionAppearTimeout= {800}
				               transitionEnter={false} transitionLeave={false}>
				               <div id='answer'>
				               	<div style={{textAlign: 'right'}} > 
									<RaisedButton label='Ответить'  style={{ margin: 10}} 
										onClick={this.getAnswer} /> 
									</div>
								</div>
						</ReactCSSTransitionGroup>
	if(count_inputs>this.state.slide+1){
		buttonElement = <ReactCSSTransitionGroup
							 transitionName="opacity"
				               transitionAppear={true} transitionAppearTimeout= {800}
				               transitionEnter={false} transitionLeave={false}>
				               <div id='answer'>
				               	<div style={{textAlign: 'right'}} > 
									<RaisedButton label='Дальше'  style={{ margin: 10}} 
										onClick={this.next} /> 
									</div>
								</div>
						</ReactCSSTransitionGroup>
	}		       			 	


















	var button  = (this.props.nowAnswer) ?  buttonElement :  <div/>

	// var opacity = (this.props.type)? 0.3 : 1
	var blur =  (this.props.type)? 2 : 0
	var style = {transition: 'opacity .2s ease-in', padding: '10px 0px', filter: 'blur('+blur+'px)'} 
	if(this.props.maxHeight){
		style.maxHeight = this.props.maxHeight
	}
	var mobile_button = (this.props.nowAnswer) ?  this.getMobileAnswer() :  <div/>
	const overpaper_style = {
		width: "100%",
		height: "100%",
		position: 'absolute',
		opacity: 0.6,
		filter: 'blur(1px)',
		zIndex: 220
	}

	var overpaper = (this.props.type)? <div style={overpaper_style}/> : <div/>	
	return(<div style={style} id='mainTaskWindow'>
				{overpaper}
				<div style={{display:'inline-block', width:" 100%"}}>
					{content}
				</div>
				<hr  />
				<div style={{display:'inline-block', width: "100%"}} id='inputs_task'>
					<ReactSwipe id='carousel' ref="reactSwipe" 
				  					swipeOptions={{continuous: false, startSlide: this.state.slide,
				  					speed: 600}}>
						{inputs}
					</ReactSwipe>
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