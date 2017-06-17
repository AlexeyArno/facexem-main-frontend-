import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactSwipe from 'react-swipe';


export default class TaskDialog extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	slide: 0
		    };
		  }
next=()=>{
	var ref = "reactSwipeDialog"
	this.refs[ref].next()
	var slide =(this.state.slide<this.props.inputs.length-1)? this.state.slide+1:this.state.slide
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
	const style_button={
		margin: 15
	}
	var button = (this.props.inputs.length-1 === this.state.slide)? <RaisedButton style={style_button} onClick={this.props.close} label="Закрыть"/>:<RaisedButton style={style_button} onClick={this.next} label="Дальше"/>
	var buttonPrev = (this.state.slide>0)?<RaisedButton style={style_button} onClick={this.prev} label="Назад"/>:<div/>
	
	return(<div>
			<div style={{display:'inline-block', width:" 100%"}}>
				{this.props.content}
				</div>
				<hr  />
				<div style={{display:'inline-block', width: "100%"}}>
					<ReactSwipe	ref={"reactSwipeDialog"} 
				  				swipeOptions={{continuous: false,
				  				startSlide: this.state.slide,speed: 600}}>
						{this.props.inputs}
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