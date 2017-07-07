import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import Paper from 'material-ui/Paper';

export default class Links extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	pos: 0,
		    };	
		  }


		  clickLink=(i)=>{
		
		  	this.props.changePos(i)
		  }
		  next=()=>{
		  	var i=(this.state.pos<(this.props.data.length-1)/4)? this.state.pos+1: this.state.pos
		  	this.setState({
		  		pos: i
		  	})
		  	// this.props.changePos(i)

		  }
		  prev=()=>{
		  	var i=(this.state.pos>0)? this.state.pos-1: this.state.pos
		  	this.setState({
		  		pos: i
		  	})
		  	// this.props.changePos(i)
		  }

		  getLinks = (data)=>{
		  	var pos = this.state.pos
		  	var links = []

		  	data.map(function(item, index){
		  			links.push(<FlatButton label={index+1} style={{maxWidth: 20, height: 30, minWidth: 40, lineHeight: "20px", textAlign: 'center' }}
		  								key={index} onClick={()=>this.clickLink(index)}/>)


		  	}.bind(this))

		  	return links
		  }

render(){
	var links = this.getLinks(this.props.data)
	var margin = this.state.pos*210*(-1)
	var buttonLeft = (this.state.pos>0)?<IconButton onClick={this.prev} style={{display: 'inline-block'}}><NavigationChevronLeft/></IconButton>:<div style={{width: 48, height: 48, display: 'inline-block'}}/>
	var buttonRight = (this.state.pos<Math.floor((this.props.data.length)/5))?<IconButton onClick={this.next} style={{display: 'inline-block'}}><NavigationChevronRight/></IconButton>:<div style={{width: 48,height: 48, display: 'inline-block'}}/>
	
	// if(this.props.top){
	// 	var width  = (screen.width>647)?647: screen.width-53
	// 	return(<Paper style={{position: 'fixed', top: 50, zIndex: 99999999,width}}>
	// 			<div style={{display: 'inline-block', maxWidth: width, overflowX: 'auto', whiteSpace: "nowrap"}}>
	// 				<div style={{width: 52*links.length, marginLeft: margin, transition: 'all 0.5s ease-in-out'}}>{links}</div>
	// 			</div>
	// 		</Paper>
	// 		)
	// }
	return(
			<div style={{display: 'inline-block', textAlign: 'center', minWidth: 300}}>
				{buttonLeft}
				<div style={{display: 'inline-block', width: 200, overflow: 'hidden', whiteSpace: "nowrap"}}>
					<div style={{width: 50*links.length, marginLeft: margin, transition: 'all 0.5s ease-in-out', textAlign: 'left'}}>{links}</div>
				</div>
				{buttonRight}
			</div>

		

		   )

}



}