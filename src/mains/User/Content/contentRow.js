import React, {Component} from 'react';
import Preference from './components/preference.js';
import Progress from './components/progress.js';
import SubjectsLine from './components/subjectsLine.js';
import GlobalStatic from './components/global.js';
import Statisc from './components/static.js';
import Last from './components/last.js';
import ReactSwipe from 'react-swipe';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import IconButton from 'material-ui/IconButton';

export default class Subjects extends Component{
	 constructor(props){
				  super(props);
				  this.state = {
				  value: 0}
		 }

		 startTrans=()=>{
		 	if(this.state.value == 0){
		 		this.setState({value: 1})
		 	}else{
		 		this.setState({value: 0})
		 	}
		 	document.getElementById('userPagecomponents').style.filter = "blur(2px)"
		 }
		 endTrans=()=>{

		 	document.getElementById('userPagecomponents').style.filter = ""
		 }
		 getMenu=()=>{
		 	var style_active={
		 			background: 'rgb(33, 150, 243)',
		 			color: '#fff',
		 			display: 'inline-block',
		 			cursor: "pointer",
		 			fontSize: 14,
		 			width: '50%',
		 			textAlign: 'center',
		 			padding: 2,
		 		}
		 		var style_us = {
		 			background: '#fff',
		 			color: 'rgb(33, 150, 243)',
		 			display: 'inline-block',
		 			fontSize: 14,
		 			cursor: 'pointer',
		 			textAlign: 'center',
		 			width: '50%',
		 			padding: 2,
		 		}

		 	if(this.state.value == 0){
		 		var st1 = style_active
		 		var st2 = style_us

		 		
		 	}else{
		 		st1 = style_us
		 		st2 = style_active	 		
		 	}
		 	st1.borderRadius = '3px 0px 0px 3px'
		 	st2.borderRadius = '0px 3px 3px 0px'
		 	return <div style={{border: '2px solid rgb(33, 150, 243)', borderRadius: 5,  width: 290, marginLeft: 15, display: 'inline-block', visibility: 'hidden'}} className='controlSubjectPage'>

		 			</div>
		 }

		 smth=(i)=>{
		  	this.refs.reactSwipe.slide(i);
		  }

	render(){
		var menu = this.getMenu()
		var color= 'rgba(33, 150, 243, 0.7)'
		return(
			<div className='contentRow'>
				<SubjectsLine subjects={this.props.subjects}/>
				{menu}
				<div id='userPagecomponents'>

					<ReactSwipe className="carousel" id='carousel' ref="reactSwipe"  
				  					swipeOptions={{continuous: false, startSlide: this.state.value,
				  					speed: 600, callback: this.startTrans, transitionEnd: this.endTrans}}>
				  		<div>
				  	
							<Progress subjects={this.props.subjects} color='rgb(33, 150, 243)'/>
							<Preference  data={this.props.preference}/>
							<GlobalStatic data={this.props.globalstatic}/>
							
						</div>
						<div>
						
							<Statisc data={this.props.static}/>
							<Last data={this.props.last}/>
						</div>
					</ReactSwipe>
					<div style={{display: 'inline-block', float: 'right', position: 'absolute', right: 20, top: 600}} className="userRows">
								<IconButton onClick={()=>this.smth(1)}>
									<HardwareKeyboardArrowRight color='rgba(0,0,0,0.4)'/>
								</IconButton>
							</div>
					<div style={{display: 'inline-block', float: 'left', position: 'absolute', left: 20, top: 600}} className="userRows">
								<IconButton onClick={()=>this.smth(0)}>
									<HardwareKeyboardArrowLeft color='rgba(0,0,0,0.4)'/>
								</IconButton>
							</div>
				</div>
			</div>

			)
	}
}