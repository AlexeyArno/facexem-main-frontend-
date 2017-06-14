import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Variants from './components/variants.js'
import GlobalStaticLine from './components/global_static_line.js'
import Tasks from './components/tasks.js'

import Theme from './components/themes.js'
import ActionPanTool from 'material-ui/svg-icons/action/pan-tool'

export default class SubjectYetContent extends Component{

		 constructor(props){
				  super(props);
				  this.state = {
				  value: 0}
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
		 			padding: 2
		 		}
		 		var style_us = {
		 			background: '#fff',
		 			color: 'rgb(33, 150, 243)',
		 			display: 'inline-block',
		 			fontSize: 14,
		 			cursor: 'pointer',
		 			textAlign: 'center',
		 			width: '50%',
		 			padding: 2
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
		 	return <div style={{border: '2px solid rgb(33, 150, 243)', borderRadius: 5,  width: 290, marginLeft: 15}} className='controlSubjectPage'>
		 				<div style={st1} onClick={()=>this.smth(0)} className="button-change-pos">Основные</div>
		 				<div style={st2} onClick={()=>this.smth(1)} className="button-change-pos">Дополнительне</div>
		 			</div>
		 }

		 startTrans=()=>{
		 	if(this.state.value == 0){
		 		this.setState({value: 1})
		 	}else{
		 		this.setState({value: 0})
		 	}
		 	document.getElementById('bodySubjectContents').style.filter = "blur(2px)"
		 }
		 endTrans=()=>{
		 	document.getElementById('bodySubjectContents').style.filter = "blur(0px)"
		 }
		 smth=(i)=>{
		  	this.refs.reactSwipe.slide(i);
		  }


	render(){
		var data = this.props.data
		var menu = this.getMenu()
		return(	<div id='YetChoose'>
					{menu}
					<div id='bodySubjectContents'>
						<ReactSwipe className="carousel" id='carousel' ref="reactSwipe"  
			  					swipeOptions={{continuous: false, startSlide: this.state.value,
			  					speed: 600, callback: this.startTrans, transitionEnd: this.endTrans}}>
			  				<div>
								<GlobalStaticLine data={data.task_info}/>
								<Tasks color={this.props.color} closeColor={this.props.close} data={data.task_info}/>
								<Variants color={this.props.color} closeColor={this.props.close} data={data.task_info}/>
								<Theme data={data}/>
							</div>
							<div style={{textAlign: 'center', paddingTop: 100}}>
								<ActionPanTool style={{width: 100, height: 100, opacity: 0.7}}/>
								<div style={{fontSize: 18, opacity: 0.7}}>Простите, но здесь, пока не на что смотреть</div>
							</div>
						</ReactSwipe>
					</div>

				</div>)

	}
}

					// <Statistics data={data.task_info.test_points}/>
					// <Challenge/>