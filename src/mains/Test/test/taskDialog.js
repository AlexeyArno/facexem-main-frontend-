import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactSwipe from 'react-swipe';
import MainDecodeWorkDisplay from '../modules.js'


export default class TaskDialog extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	slide: 0,
		    	answer: this.props.now_answer
		    };
		  }
		   getInputs=(data, spec_id)=>{
		  	var input = data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}
		  				 index={spec_id} value={this.state.answer[spec_id]}/>
		  	}.bind(this))
		  	return <div>{input}</div>
		  }

		  getContent=(data)=>{
		  	return(data.content.map(function(item, index){
		  		return <MainDecodeWorkDisplay key={index} item={item} answer={this.answer}
		  				 index={index} />
		  	}.bind(this)))
		  }


		  answer=(type, data, index)=>{
				this.props.answer(type, data, index)
		  }



next=(count)=>{
	var ref = "reactSwipeDialog"
	this.refs[ref].next()
	var slide =(this.state.slide<count)? this.state.slide+1:this.state.slide
	this.setState({
		slide
	})
}

prev=()=>{
	var ref = "reactSwipeDialog"
	this.refs[ref].prev()
	var slide =(this.state.slide>0)? this.state.slide-1:this.state.slide
	this.setState({
		slide
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
	var button = (count_inputs-1 === this.state.slide)? <RaisedButton style={style_button} onClick={this.props.close} label="Закрыть"/>:<RaisedButton style={style_button} onClick={()=>this.next(count_inputs)} label="Дальше"/>
	var buttonPrev = (this.state.slide>0)?<RaisedButton style={style_button} onClick={this.prev} label="Назад"/>:<div/>
	
	return(<div>
			<div style={{display:'inline-block', width:" 100%"}}>
				{content}
				</div>
				<hr  />
				<div style={{display:'inline-block', width: "100%"}}>
					<ReactSwipe	ref={"reactSwipeDialog"} 
				  				swipeOptions={{continuous: false,
				  				startSlide: this.state.slide,speed: 600}}>
						{inputs}
					</ReactSwipe>
				</div>
				<hr/>
				<div style={{textAlign: 'right'}}>
						{buttonPrev}
						{button}
					
				</div>
		</div>

		   )

}



}